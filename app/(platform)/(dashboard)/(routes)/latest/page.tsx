import { BookOpen, FileText, Home, Users } from "lucide-react";
import React from "react";
import { CardItemSection } from "./_components/card-item-section";
import CardListSection from "./_components/card-list-section";
import FooterSection from "./_components/footer-section";
import HeaderSection from "./_components/header-section";
import { LinkListSection } from "./_components/link-list-section";
import { LinkSection } from "./_components/link-section";
import { LinkWrapperSection } from "./_components/link-wrapper-section";
import MainContentSection from "./_components/main-content-section";
import PopularCardsSection from "./_components/popular-cards-section";
import RecentCardsSection from "./_components/recent-cards-section";
import { RecentLinkSection } from "./_components/recent-link-section";
import SearchSection from "./_components/search-section";
import UserStudySection from "./_components/user-study-section";

const LatestPage = (): JSX.Element => {
  const navigationItems = [
    { icon: Home, alt: "Home" },
    { icon: BookOpen, alt: "Books" },
    { icon: Users, alt: "Users" },
    { icon: FileText, alt: "Files" },
  ];

  return (
    <div className="flex-1 max-w-[1300px] mx-auto px-12 pt-20">
      <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#d9dde8] text-[15.2px] tracking-[0] leading-6 whitespace-nowrap mb-6">
        Recentes
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <LinkSection />
        <LinkWrapperSection />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <LinkListSection />
        <CardItemSection />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <MainContentSection />
        <RecentLinkSection />
      </div>

      <div className="mb-8 [font-family:'Inter-Regular',Helvetica] font-normal text-[#d9dde8] text-[15.2px] tracking-[0] leading-6">
        <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#d9dde8] text-[15.2px] tracking-[0] leading-6">
          Porque você estudou listas de{" "}
        </span>
        <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold">
          ismael_cesar
        </span>
      </div>

      <div className="mb-8">
        <SearchSection />
      </div>

      <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#d9dde8] text-[15.4px] tracking-[0] leading-6 whitespace-nowrap mb-6">
        Listas de cartões populares
      </div>

      <div className="mb-8">
        <CardListSection />
      </div>

      <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#d9dde8] text-[15.4px] tracking-[0] leading-6 whitespace-nowrap mb-6">
        Livros didáticos populares
      </div>

      <div className="mb-8">
        <RecentCardsSection />
      </div>

      <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#d9dde8] text-[15.6px] tracking-[0] leading-6 whitespace-nowrap mb-6">
        Questões populares
      </div>

      <div className="mb-8">
        <PopularCardsSection />
      </div>

      <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#d9dde8] text-[15.4px] tracking-[0] leading-6 whitespace-nowrap mb-6">
        Principais criadores
      </div>

      <div className="mb-8">
        <UserStudySection />
      </div>

      <FooterSection />
    </div>
  );
};

export default LatestPage;
