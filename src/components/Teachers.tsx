import { motion } from 'motion/react';

export default function Teachers() {
  const teachers = [
    {
      name: "Teacher Elena",
      origin: "Philippines",
      specialty: "시니어 영어",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
      description: "풍부한 경험과 따뜻한 마음으로 성인 및 시니어 수강생들의 영어 학습을 돕습니다."
    },
    {
      name: "Teacher Joy",
      origin: "Philippines",
      specialty: "비즈니스 영어",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      description: "친절하고 세심한 지도로 비즈니스 회화의 기초부터 실전까지 책임집니다."
    },
    {
      name: "Teacher Lucas",
      origin: "USA",
      specialty: "IELTS / TOEFL",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
      description: "수년간의 시험 대비 노하우로 수강생들의 목표 점수 달성을 돕습니다."
    },
    {
      name: "Teacher Angel",
      origin: "Philippines",
      specialty: "주니어 영어",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
      description: "밝은 에너지와 재미있는 교구 활용으로 아이들이 영어를 즐기게 만듭니다."
    },
    {
      name: "Teacher Bella",
      origin: "Philippines",
      specialty: "일상 대화",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400",
      description: "밝은 미소와 체계적인 수업 방식으로 수강생들의 회화 자신감을 높여드립니다."
    }
  ];

  return (
    <section id="teachers" className="bg-white">
      <div className="section-padding">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-lime-600 font-bold mb-3 md:mb-4 uppercase tracking-widest text-sm">강사진 소개</h2>
          <h3 className="text-2xl md:text-4xl font-bold">검증된 전문 원어민 강사진</h3>
          <p className="text-gray-600 mt-3 md:mt-4 text-sm md:text-base">엄격한 선발 과정을 거친 최고의 강사들과 함께하세요.</p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {teachers.map((teacher, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex flex-col mb-3">
                  <span className="text-[10px] font-bold text-lime-600 bg-lime-50 px-2 py-0.5 rounded w-fit mb-1 notranslate" translate="no">
                    {teacher.specialty}
                  </span>
                  <h4 className="text-lg font-bold notranslate" translate="no">{teacher.name}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {teacher.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
