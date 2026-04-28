import { CheckCircle, Users, Clock, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Users className="text-lime-600" size={32} />,
      title: "검증된 원어민 강사진",
      description: "전문 teach skill을 보유하고 풍부한 교육 경험을 갖춘 전문 원어민 강사진이 함께합니다."
    },
    {
      icon: <Clock className="text-lime-600" size={32} />,
      title: "자유로운 시간 선택",
      description: "바쁜 일상 속에서도 내가 원하는 시간에 언제 어디서나 수업을 들을 수 있습니다."
    },
    {
      icon: <Award className="text-lime-600" size={32} />,
      title: "1:1 맞춤형 커리큘럼",
      description: "레벨테스트를 통해 수강생의 수준과 목적에 맞는 최적화된 학습 플랜을 제공합니다."
    },
    {
      icon: <CheckCircle className="text-lime-600" size={32} />,
      title: "체계적인 피드백",
      description: "매 수업 후 제공되는 상세한 피드백과 녹화 영상을 통해 복습 효율을 극대화합니다."
    }
  ];

  return (
    <section id="about" className="bg-white">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-lime-600 font-bold mb-4 uppercase tracking-widest">이토크의 강점</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">이토크만의 특별한 학습 시스템</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              단순한 대화가 아닌, 체계적인 커리큘럼과 검증된 강사진을 통해 
              수강생 여러분의 영어 실력을 확실하게 변화시켜 드립니다.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-lime-50 rounded-lg flex items-center justify-center text-lime-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500 leading-snug">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-lime-100 rounded-3xl -rotate-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              alt="Video Class Features" 
              className="relative z-10 rounded-3xl shadow-xl w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
