import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../services/api";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await authApi.viewProfile();
      setProfile(response.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch profile");
      if (err.response?.status === 401) {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">No profile data available</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-blue-500 to-blue-600">
            <h3 className="text-lg leading-6 font-medium text-white">
              Profile Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-blue-100">
              Personal details and account information
            </p>
          </div>

          {/* Profile Content */}
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900">{profile.fullName}</dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm text-gray-900">{profile.email}</dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Role</dt>
                <dd className="mt-1 text-sm text-gray-900 capitalize">{profile.role}</dd>
              </div>

              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Account created</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {new Date(profile.createdAt).toLocaleDateString()}
                </dd>
              </div>

              {profile.role === "jobseeker" && (
                <>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Skills</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {profile.skills?.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {profile.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      ) : (
                        "No skills added yet"
                      )}
                    </dd>
                  </div>

                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Learning Progress</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {profile.learningProgress ? (
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-lg font-semibold text-gray-900">
                              {profile.learningProgress.totalTracks}
                            </div>
                            <div className="text-sm text-gray-500">Total Tracks</div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-lg font-semibold text-gray-900">
                              {profile.learningProgress.completedTracks}
                            </div>
                            <div className="text-sm text-gray-500">Completed Tracks</div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-lg font-semibold text-gray-900">
                              {profile.learningProgress.totalBadges}
                            </div>
                            <div className="text-sm text-gray-500">Badges Earned</div>
                          </div>
                        </div>
                      ) : (
                        "No learning progress yet"
                      )}
                    </dd>
                  </div>
                </>
              )}

              {profile.role === "organization" && (
                <>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Organization Name</dt>
                    <dd className="mt-1 text-sm text-gray-900">{profile.organizationName}</dd>
                  </div>

                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Industry</dt>
                    <dd className="mt-1 text-sm text-gray-900">{profile.industry}</dd>
                  </div>
                </>
              )}
            </dl>
          </div>

          {/* Action Buttons */}
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 