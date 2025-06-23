
const UseCasesSection = () => {
  const useCases = [
    {
      title: "Automated Lead Routing to CRM",
      description: "Automatically capture leads from multiple channels and route them to the appropriate CRM system with intelligent categorization and priority scoring.",
      result: "Reduce lead response time by 75% and increase conversion rates",
      image: "📊"
    },
    {
      title: "WhatsApp Bot Client Engagement",
      description: "Deploy intelligent WhatsApp bots that handle customer inquiries, provide instant quotes, and schedule appointments while maintaining personalized communication.",
      result: "Handle 90% of customer inquiries without human intervention",
      image: "💬"
    },
    {
      title: "AI Phone Agent Booking System",
      description: "AI-powered phone agents that handle appointment bookings, follow-up calls, and customer support with natural conversation flow.",
      result: "Book 60% more appointments with 24/7 availability",
      image: "📞"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#4D7DDA]/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            Real-World <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            See how businesses like yours are transforming their operations with our AI automation solutions.
          </p>
        </div>

        {/* Use Cases */}
        <div className="space-y-8 sm:space-y-12">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-2 sm:mb-4">{useCase.image}</div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white px-2">
                  {useCase.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed px-2 lg:px-0">
                  {useCase.description}
                </p>
                <div className="bg-gradient-to-r from-[#4D7DDA]/20 to-[#8E1E5F2]/20 p-3 sm:p-4 rounded-lg border border-[#4D7DDA]/30 mx-2 lg:mx-0">
                  <p className="text-[#4D7DDA] font-semibold text-sm sm:text-base">
                    ✨ {useCase.result}
                  </p>
                </div>
              </div>

              {/* Visual placeholder */}
              <div className="flex-1 max-w-sm sm:max-w-md w-full">
                <div className="glass-card aspect-video flex items-center justify-center mx-2 lg:mx-0">
                  <div className="text-center">
                    <div className="text-5xl sm:text-6xl lg:text-8xl mb-2 sm:mb-4">{useCase.image}</div>
                    <p className="text-gray-400 text-xs sm:text-sm">Use Case Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
