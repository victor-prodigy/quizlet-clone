import React from "react";

const menuItems = [
  { text: "Central de ajuda", className: "w-28" },
  { text: "Inscrever-se", className: "w-[85px]" },
  { text: "Código de honra", className: "w-[115px]" },
  { text: "Diretrizes da comunidade", className: "w-[172px]" },
  { text: "Privacidade", className: "w-[82px]" },
  { text: "Termos de serviço", className: "w-[124px]" },
  { text: "Política de cookies e anúncios", className: "w-[201px]" },
  { text: "Publicidade baseada em interesses", className: "w-[235px]" },
  { text: "Quizlet para instituições de ensino", className: "w-[230px]" },
  { text: "Informações para pais", className: "w-[150px]" },
];

export default function ReviewSection(): JSX.Element {
  return (
    <nav className="w-[244px] h-96 relative">
      <div className="flex flex-col space-y-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`${item.className} h-6 rounded cursor-pointer hover:opacity-80 transition-opacity`}
          >
            <div className="px-0.5 py-px">
              <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#282e3e] text-[13.7px] tracking-[0] leading-5 whitespace-nowrap">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
