const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="mycontainer">
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900 mb-8">
            Troubleshooting Made Easy
          </h2>

          <div className="flex flex-col gap-4 lg:flex-row">
            {/* left */}
            <div className="lg:w-[35%] flex flex-col gap-3">
              <div className="p-6 bg-black flex flex-col gap-16 text-white rounded-xl shadow-lg">
                <div className="mb-4 text-2xl">🔍</div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Issue Detection
                  </h3>
                  <p>
                    StableOx identifies common wallet issues, from transaction
                    errors to connection problems, and provides step-by-step
                    solutions.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-yellow-500 flex flex-col gap-10 text-white rounded-xl shadow-lg">
                <div className="mb-4 text-2xl">🔐</div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Enhanced Security
                  </h3>
                  <p>
                    StableOx ensures that your troubleshooting process is
                    secure, protecting your data and privacy throughout.
                  </p>
                </div>
              </div>
            </div>
            {/* left */}
            {/* right */}
            <div className="lg:w-[65%] flex flex-col gap-5">
              <div className="p-6 bg-green-500 flex flex-col gap-20 text-white rounded-xl shadow-lg">
                <div className="mb-4 text-2xl">⚙️</div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Real-Time Solutions
                  </h3>
                  <p>
                    Get instant troubleshooting guidance and fixes tailored to
                    your specific wallet issue, ensuring seamless blockchain
                    access.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="lg:w-[40%]">
                  <div className="p-6 bg-gray-100 flex flex-col gap-10 rounded-xl shadow-lg">
                    <div className="mb-4 text-2xl">⚡</div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Cost Efficiency
                      </h3>
                      <p>
                        No extra fees or hidden charges. StableOx offers
                        cost-effective solutions, allowing you to troubleshoot
                        without extra costs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[60%] p-6 bg-black flex items-center justify-center rounded-xl shadow-lg">
                <img src="phe6.png" alt="" className="w-[60%]"/>
                </div>
              </div>
            </div>
            {/* right */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
