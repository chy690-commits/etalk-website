import { BookOpen, GraduationCap, Briefcase, MessageSquare } from 'lucide-react';

export default function Curriculum() {
  const courses = [
    {
      icon: <GraduationCap size={24} />,
      title: "주니어 영어",
      target: "초/중등 학생",
      description: "흥미 위주의 수업으로 영어에 대한 자신감을 키우고 기초를 탄탄히 다집니다.",
      tags: ["파닉스", "기초회화", "교과연계"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400"
    },
    {
      icon: <BookOpen size={24} />,
      title: "정규 회화",
      target: "고등/대학생/성인",
      description: "일상생활에서 바로 사용 가능한 실용 회화 위주의 체계적인 학습 과정입니다.",
      tags: ["자유주제", "패턴학습", "리스닝"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400"
    },
    {
      icon: <Briefcase size={24} />,
      title: "비즈니스 영어",
      target: "직장인/취업준비생",
      description: "회의, 프레젠테이션, 이메일 작성 등 실무에 필요한 전문 영어를 학습합니다.",
      tags: ["인터뷰", "프레젠테이션", "이메일"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "시험 대비",
      target: "수험생",
      description: "TOEIC Speaking, OPIC, IELTS 등 각종 스피킹 시험의 고득점을 목표로 합니다.",
      tags: ["토스/오픽", "IELTS", "면접대비"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="curriculum" className="bg-gray-50">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div>
            <h2 className="text-lime-600 font-bold mb-3 md:mb-4 uppercase tracking-widest text-sm">학습 커리큘럼</h2>
            <h3 className="text-2xl md:text-4xl font-bold">당신에게 꼭 맞는 학습 과정</h3>
          </div>
          <p className="text-gray-600 max-w-md">
            수강생의 연령과 목적에 따라 세분화된 커리큘럼을 제공하여 학습 효과를 극대화합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-1/3 h-48 sm:h-auto relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-lime-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                  {course.icon}
                </div>
              </div>
              <div className="p-8 sm:w-2/3">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-2xl font-bold">{course.title}</h4>
                  <span className="text-xs font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded uppercase tracking-tighter">
                    {course.target}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 text-sm">{course.description}</p>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span key={tag} className="text-xs text-lime-600 font-medium bg-lime-50 px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
