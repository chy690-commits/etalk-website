import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "주 2회 과정",
      price: "80,000",
      period: "월",
      features: ["25분 수업", "월 8회 수업", "수업 피드백 제공", "학습 상담 지원", "월간 리포트 제공"],
      recommended: false
    },
    {
      name: "주 3회 과정",
      price: "100,000",
      period: "월",
      features: ["25분 수업", "월 12회 수업", "수업 피드백 제공", "학습 상담 지원", "영작 교정 서비스", "월간 리포트 제공"],
      recommended: true
    },
    {
      name: "주 5회 과정",
      price: "140,000",
      period: "월",
      features: ["25분 수업", "월 20회 수업", "수업 피드백 제공", "학습 상담 지원", "영작 교정 서비스", "프리미엄 교재 제공", "월간 리포트 제공"],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="bg-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-lime-600 font-bold mb-4 uppercase tracking-widest">수강료 안내</h2>
          <h3 className="text-3xl md:text-4xl font-bold">합리적인 수강료 안내</h3>
          <p className="text-gray-600 mt-4">부담 없는 가격으로 원어민과 매일 대화하세요.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-6 md:p-8 rounded-3xl border-2 transition-all duration-300 ${plan.recommended ? 'border-lime-600 shadow-xl md:shadow-2xl md:scale-105 z-10' : 'border-gray-100 hover:border-lime-200'}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-600 text-white text-sm font-bold py-1 px-4 rounded-full">
                  가장 인기있는 코스
                </div>
              )}
              <h4 className="text-xl font-bold mb-6">{plan.name}</h4>
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-1">원 / {plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600">
                    <Check size={18} className="text-lime-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScpqkUPcWdkdnFfuS-tBBOOqZnHhNAQIRe67bZfzOJH7wYdpA/viewform?usp=preview"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-4 rounded-2xl font-bold transition-all ${plan.recommended ? 'bg-lime-600 text-white hover:bg-lime-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                수강 신청하기
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-lime-50 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold mb-2">무료 레벨테스트를 먼저 받아보세요!</h4>
            <p className="text-gray-600">실력을 확인하고 나에게 맞는 과정을 추천받으실 수 있습니다.</p>
          </div>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdp91KLm-Yl8f-tGMg1sAH9v4cvHz8oloiUBqhXb8HYpEHZ_Q/viewform?usp=header" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap"
          >
            지금 바로 신청하기
          </a>
        </div>
      </div>
    </section>
  );
}
