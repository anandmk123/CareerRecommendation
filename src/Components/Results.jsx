import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export default function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [chartHeight, setChartHeight] = useState(500);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 400) {
        setChartHeight(250);
      } else if (window.innerWidth < 500) {
        setChartHeight(350);
      } else {
        setChartHeight(500);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const apiResponse = state?.apiResponse;

  const careerMapping = {
    Engineering_Tech: "Engineering and Technology",
    Healthcare_Medicine: "Healthcare and Medicine",
    Business_Commerce: "Business and Commerce",
    Creative_Arts_Design: "Creative Arts and Design",
    Sports_Physical_Edu: "Sports and Physical Education",
    Teaching_Social_Services: "Teaching and Social Services",
  };

  const careerPaths = {
    "Engineering and Technology": {
      description: "Careers in engineering, architecture, computer science, and related technology fields.",
      path: [
        {
          stage: "After 10th",
          steps: [
            "Choose Science stream with Mathematics, Physics, Chemistry in +2",
            "Optional: Pursue polytechnic diploma for early technical skills"
          ]
        },
        {
          stage: "After 12th",
          steps: [
            "Appear for JEE Main (January & April) and JEE Advanced (for IITs)",
            "Other entrance exams: BITSAT, VITEEE, etc.",
            "Pursue B.Tech/B.E (4 years) or Integrated M.Tech (5 years)"
          ]
        },
        {
          stage: "Higher Education",
          steps: [
            "GATE exam (February) for M.Tech admissions",
            "GRE for studying abroad",
            "Specializations available in various engineering fields"
          ]
        },
        {
          stage: "Career Options",
          steps: [
            "Software Engineer, Mechanical Engineer, Civil Engineer, etc.",
            "Electrical Engineer, Electronics Engineer",
            "Research Scientist, Technical Consultant",
            "AI/ML Engineer, Data Analyst",
            "Higher studies leading to PhD"
          ]
          
        }
      ],
      exams: [
        { name: "JEE Main", frequency: "Twice yearly (Jan & Apr)" },
        { name: "JEE Advanced", frequency: "Once yearly" },
        { name: "GATE", frequency: "Once yearly (Feb)" },
        { name: "BITSAT", frequency: "Once yearly" }
      ]
    },
    "Healthcare and Medicine": {
      description: "Careers in medicine, nursing, research, and other healthcare services.",
      path: [
        {
          stage: "After 10th",
          steps: [
            "Choose Science stream with Physics, Chemistry, Biology in +2",
            "Optional: Pursue paramedical diploma courses"
          ]
        },
        {
          stage: "After 12th",
          steps: [
            "Appear for NEET UG (May) for MBBS/BDS admissions",
            "Other options: B.Sc Nursing, Pharmacy, Allied Health Sciences"
          ]
        },
        {
          stage: "Higher Education",
          steps: [
            "NEET PG for MD/MS admissions",
            "FMGE for foreign medical graduates",
          ]
        },
        {
          stage: "Career Options",
          steps: [
            "Doctor, Surgeon, Physician",
            "Dentist, Pharmacist, Nurse",
            "Physiotherapist, Occupational Therapist",
            "Medical Researcher, Public Health Specialist",
            "Lab Technician, Radiologist, Paramedic"
          ]
          
        }
      ],
      exams: [
        { name: "NEET UG", frequency: "Once yearly (May)" },
        { name: "NEET PG", frequency: "Once yearly" },
        { name: "FMGE", frequency: "Twice yearly" },
        { name: "AIIMS PG", frequency: "Once yearly" }
      ]
    },
    "Business and Commerce": {
      description: "Careers in finance, management, marketing, and commerce-related fields.",
      path: [
        {
          stage: "After 10th",
          steps: [
            "Choose Commerce stream with Accountancy, Economics, Business Studies",
            "Optional: Choose Science/Arts with Mathematics"
          ]
        },
        {
          stage: "After 12th",
          steps: [
            "Appear for CUET, IPMAT (for integrated MBA)",
            "Pursue B.Com, BBA, BMS (3 years)",
            "Professional courses: CA, CMA foundation"
          ]
        },
        {
          stage: "Higher Education",
          steps: [
            "CAT (November), MAT, CMAT for MBA",
            "Specializations: Finance, Marketing, HR, Operations",
            "Global options: GMAT for international business schools"
          ]
        },
        {
          stage: "Career Options",
          steps: [
            "Chartered Accountant, Financial Analyst",
            "Marketing Manager, HR Specialist",
            "Entrepreneur, Business Consultant"
          ]
        }
      ],
      exams: [
        { name: "CAT", frequency: "Once yearly (Nov)" },
        { name: "MAT", frequency: "Multiple times yearly" },
        { name: "CA Foundation", frequency: "Twice yearly" },
        { name: "CMAT", frequency: "Once yearly" },
      ]
    },
    "Creative Arts and Design": {
      description: "Careers involving creativity in arts, design, media, and related industries.",
      path: [
        {
          stage: "After 10th",
          steps: [
            "Can choose any stream (Arts preferred for some fields)",
            "Develop portfolio of creative work",
            "Join art/drama/music classes for skill development"
          ]
        },
        {
          stage: "After 12th",
          steps: [
            "Appear for NID DAT, NIFT, UCEED for design programs",
            "Pursue BFA, B.Des, BVA (4 years)",
            "Diploma courses in specific creative fields"
          ]
        },
        {
          stage: "Higher Education",
          steps: [
            "CEED for M.Des programs",
            "Specializations: Graphic Design, Animation, Fashion, etc.",
            "Build professional portfolio and gain practical experience"
          ]
        },
        {
          stage: "Career Options",
          steps: [
            "Graphic Designer, Animator, Art Director",
            "Fashion Designer, Interior Designer",
            "Creative Director, Multimedia Artist",
            "Visual Effects (VFX) Artist, Film Director, Writer",
            "Photographer, UX/UI Designer"
          ]
        }
      ],
      exams: [
        { name: "NID DAT", frequency: "Once yearly" },
        { name: "NIFT", frequency: "Once yearly" },
        { name: "UCEED", frequency: "Once yearly" },
        { name: "CEED", frequency: "Once yearly" }
      ]
    },
    "Sports and Physical Education": {
      description: "Careers in professional sports, physical training, coaching, and related fields.",
      path: [
        {
          stage: "After 10th",
          steps: [
            "Can choose any stream (Physical Education subject preferred)",
            "Join sports academies for specialized training in football, cricket, etc.",
            "Participate in district/state/national level competitions",
            "Focus on physical fitness and skill development"
          ]
        },
        {
          stage: "After 12th",
          steps: [
            "Appear for sports trials and university admissions",
            "Pursue BPEd (3-4 years) or Diploma in Sports Coaching",
            "Get certified in specific sports/fitness disciplines",
            "Consider sports scholarships at universities"
          ]
        },
        {
          stage: "Higher Education",
          steps: [
            "MPEd for advanced studies in physical education",
            "Sports Authority of India (SAI) training programs",
            "International coaching certifications for sports",
            "Specialized courses in sports management or sports science"
          ]
        },
        {
          stage: "Career Options",
          steps: [
            "Professional Athlete (Football, Cricket, Basketball, etc.)",
            "Sports Coach/Physical Education Teacher",
            "Fitness Trainer/Strength and Conditioning Specialist",
            "Sports Manager/Event Organizer",
            "Sports Commentator/Journalist",
            "Sports Physiotherapist"
          ]
        }
      ],
      exams: [
        { name: "University Sports Quota", frequency: "Yearly admissions" },
        { name: "SAI Trials", frequency: "Periodically" },
        { name: "National Sports Federation Trials", frequency: "Varies by sport" },
        { name: "Sports Scholarship Tests", frequency: "Yearly" }
      ]
    },
    
    "Teaching and Social Services": {
      description: "Careers in education, civil services, law, defense, counseling, social work, and community services.",
      path: [
        {
          stage: "After 10th",
          steps: [
            "For teaching: Choose Arts/Science stream",
            "For law: Any stream (English and Social Sciences helpful)",
            "For civil services: Strong foundation in general knowledge",
            "Develop communication and leadership skills"
          ]
        },
        {
          stage: "After 12th",
          steps: [
            "For teaching: Pursue BA/BSc + B.Ed or integrated B.Ed",
            "For law: Appear for CLAT for NLUs or university law entrance",
            "For civil services: Any graduation degree (start UPSC preparation)",
            "Volunteer for social causes to gain experience"
          ]
        },
        {
          stage: "Higher Education",
          steps: [
            "For teaching: CTET/STET for school teaching, NET for college",
            "For law: LLB (3 years after graduation) or BA LLB (5 years)",
            "For civil services: UPSC CSE preparation (typically after graduation)",
            "MSW for advanced social work"
          ]
        },
        {
          stage: "Career Options",
          steps: [
            "School/College Teacher/Professor",
            "Civil Servant (IAS/IPS/IFS through UPSC)",
            "Lawyer/Judge/Legal Advisor",
            "Police Officer/Defense Personnel",
            "Social Worker/NGO Professional",
            "Counsellor/Child Care Specialist"
          ]
        }
      ],
      exams: [
        { name: "CTET", frequency: "Twice yearly" },
        { name: "UGC NET", frequency: "Twice yearly" },
        { name: "CLAT", frequency: "Once yearly" },
        { name: "UPSC CSE", frequency: "Once yearly" },
        { name: "State PSC", frequency: "Varies by state" }
      ]
    }
  };

  const allKeys = [
    "Engineering_Tech",
    "Healthcare_Medicine",
    "Business_Commerce",
    "Creative_Arts_Design",
    "Sports_Physical_Edu",
    "Teaching_Social_Services",
  ];

  const data = allKeys.map((key) => ({
    career: careerMapping[key],
    percentage: apiResponse && apiResponse[key] ? parseFloat(apiResponse[key].toFixed(2)) : 0,
  }));

  const handleBarClick = (dataItem) => {
    setSelectedCareer(dataItem);
  };

  const closeModal = () => {
    setSelectedCareer(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full bg-white rounded-xl shadow-lg p-6"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-4">
          Recommendation Results
        </h1>

        <div className="w-full min-h-[250px] flex items-center justify-center overflow-x-auto">
          <div className="min-w-[300px] w-full max-w-full">
            <ResponsiveContainer width="100%" height={chartHeight}>
              <ComposedChart
                data={data}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} unit="%" />
                <YAxis
                  dataKey="career"
                  type="category"
                  width={window.innerWidth < 500 ? 120 : 180}
                  tick={{ fontSize: window.innerWidth < 500 ? 12 : 14 }}
                />
                <Tooltip />
                <Bar
                  dataKey="percentage"
                  fill="#82ca9d"
                  cursor="pointer"
                  onClick={(chartData) => handleBarClick(chartData)}
                >
                  <LabelList dataKey="percentage" position="right" fontSize={14} fill="#333" />
                </Bar>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Go Back
        </button>
      </motion.div>

      {selectedCareer && (
        <div
        className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50"
        onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-700">{selectedCareer.career}</h2>
            <p className="mb-4 text-gray-700">{careerPaths[selectedCareer.career].description}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-green-600">Career Path in India</h3>
              <div className="space-y-4">
                {careerPaths[selectedCareer.career].path.map((stage, index) => (
                  <div key={index} className="border-l-4 border-blue-300 pl-4">
                    <h4 className="font-medium text-lg text-gray-800">{stage.stage}</h4>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      {stage.steps.map((step, i) => (
                        <li key={i} className="text-gray-700">{step}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-green-600">Important Entrance Exams</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {careerPaths[selectedCareer.career].exams.map((exam, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded">
                    <p className="font-medium">{exam.name}</p>
                    <p className="text-sm text-gray-600">Conducted: {exam.frequency}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={closeModal}
              className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}