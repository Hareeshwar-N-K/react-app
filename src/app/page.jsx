"use client";
import React from "react";

function MainComponent() {
  const [showBidderForm, setShowBidderForm] = useState(false);
  const [formData, setFormData] = useState({
    tenderId: "",
    projectName: "",
    budget: "",
    keyRequirements: "",
    region: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showTenderView, setShowTenderView] = useState(false);
  const [submittedBids, setSubmittedBids] = useState([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("Please enter all details");
      return;
    }

    setSubmittedBids([...submittedBids, formData]);
    setShowSuccessMessage(true);
  };

  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  if (showTenderView) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src="https://ucarecdn.com/51f8957b-fd90-4aaa-ba76-57d6ad69cd2f/-/format/auto/"
                alt="Green Bid Platform Logo showing an isometric city with sustainable buildings and infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <button
            onClick={() => {
              setShowTenderView(false);
              setSelectedBid(null);
              setCalculationResult(null);
            }}
            className="mb-6 text-green-600 hover:text-green-700"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Login
          </button>

          <h2 className="text-2xl font-bold text-green-800 mb-6 font-roboto">
            All Tender Bids
          </h2>

          <div className="space-y-4">
            {submittedBids.length === 0 ? (
              <p className="text-gray-600 text-center py-4">
                No bids submitted yet
              </p>
            ) : (
              submittedBids.map((bid, index) => (
                <div
                  key={index}
                  className="border p-4 rounded shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-lg text-green-800">
                    Tender ID: {bid.tenderId}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                      <p>
                        <span className="font-semibold">Project:</span>{" "}
                        {bid.projectName}
                      </p>
                      <p>
                        <span className="font-semibold">Budget:</span> $
                        {bid.budget}
                      </p>
                      <p>
                        <span className="font-semibold">Deadline:</span>{" "}
                        {bid.deadline} days
                      </p>
                      <p>
                        <span className="font-semibold">Region:</span>{" "}
                        {bid.region}
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="font-semibold">
                          Environmental Score:
                        </span>{" "}
                        {bid.environmentalImpactScore}
                      </p>
                      <p>
                        <span className="font-semibold">Energy Reduction:</span>{" "}
                        {bid.energyUseReduction}%
                      </p>
                      <p>
                        <span className="font-semibold">Waste Reduction:</span>{" "}
                        {bid.wasteReduction}%
                      </p>
                      <p>
                        <span className="font-semibold">
                          Renewable Materials:
                        </span>{" "}
                        {bid.renewableMaterials}%
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p>
                      <span className="font-semibold">Requirements:</span>{" "}
                      {bid.keyRequirements}
                    </p>
                    <p>
                      <span className="font-semibold">Penalties:</span>{" "}
                      {bid.penalties}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => {
                        setSelectedBid(bid);
                        setCalculationResult(calculateScore(bid));
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
                    >
                      Calculate Score
                    </button>
                  </div>
                  {selectedBid === bid && calculationResult && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-green-800 font-semibold">
                        Overall Sustainability Score: {calculationResult}%
                      </p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

  if (showBidderForm) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src="https://ucarecdn.com/51f8957b-fd90-4aaa-ba76-57d6ad69cd2f/-/format/auto/"
                alt="Green Bid Platform Logo showing an isometric city with sustainable buildings and infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <button
            onClick={() => {
              setShowBidderForm(false);
              setFormData({
                tenderId: "",
                projectName: "",
                budget: "",
                keyRequirements: "",
                region: "",
                deadline: "",
                environmentalImpactScore: "",
                energyUseReduction: "",
                wasteReduction: "",
                renewableMaterials: "",
                penalties: "",
              });
            }}
            className="mb-6 text-green-600 hover:text-green-700"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Login
          </button>
          <h2 className="text-2xl font-bold text-green-800 mb-6 font-roboto">
            Submit Bid
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tender ID
                </label>
                <input
                  type="text"
                  name="tenderId"
                  value={formData.tenderId}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Name
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Budget
                </label>
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Key Requirements
                </label>
                <textarea
                  name="keyRequirements"
                  value={formData.keyRequirements}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Region
                </label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Region
                </label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Penalties
                </label>
                <textarea
                  name="penalties"
                  value={formData.penalties}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="w-full font-semibold py-3 px-6 rounded-lg transition duration-300 bg-green-600 hover:bg-green-700 text-white"
              >
                Submit Bid
              </button>
            </div>
          </form>

          {showSuccessMessage && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  Success!
                </h3>
                <p>Request to bid has been sent.</p>
                <button
                  onClick={() => {
                    setShowSuccessMessage(false);
                    setShowBidderForm(false);
                    setFormData({
                      tenderId: "",
                      projectName: "",
                      budget: "",
                      keyRequirements: "",
                      region: "",
                    });
                  }}
                  className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Back to Login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img
              src="https://ucarecdn.com/51f8957b-fd90-4aaa-ba76-57d6ad69cd2f/-/format/auto/"
              alt="Green Bid Platform Logo showing an isometric city with sustainable buildings and infrastructure"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center text-green-800 mb-8 font-roboto">
          Green Bid Optimization Platform
        </h1>

        <div className="space-y-4">
          <button
            onClick={() => setShowBidderForm(true)}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
          >
            <i className="fas fa-user-tie mr-2"></i>
            Tender Login
          </button>

          <button
            onClick={() => setShowTenderView(true)}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
          >
            <i className="fas fa-hard-hat mr-2"></i>
            Bidder Login
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Sustainable Construction Bidding Platform
        </p>
      </div>
    </div>
  );
}

export default MainComponent;