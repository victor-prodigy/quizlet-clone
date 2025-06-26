import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CombineSection from "./_components/combine-section";
import ContentWrapperSection from "./_components/content-wrapper-section";
import { HeaderSection } from "./_components/header-section";
import { LearnSection } from "./_components/learn-section";
import { MainContentSection } from "./_components/main-content-section";
import FlashcardsSection from "./_components/flashcards-section";
import StudentNavSection from "./_components/student-nav-section";
import ReviewSection from "./_components/review-section";
import LanguageNavSection from "./_components/language-nav-section";
import { countries, popularCardLists, socialIcons } from "@/constants";

const MarketingPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#121212]">
      <div className="bg-[#f6f7fb]">
        <div className="relative w-full">
          <HeaderSection />

          <div className="w-full">
            <div className="w-full">
              <MainContentSection />
              <ContentWrapperSection />
              <FlashcardsSection />
              <LearnSection />
              <CombineSection />

              {/* Popular Card Lists Section */}
              <section className="w-full py-8 bg-[#f6f7fb]">
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-center text-[#282e3e] text-xl font-bold [font-family:'Inter-Bold',Helvetica] mb-8">
                    Listas de cartões populares
                  </h2>

                  <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                      {popularCardLists.map((card, index) => (
                        <Card
                          key={index}
                          className="bg-white border-2 border-[#edeff4] rounded-lg overflow-hidden shadow-[0px_4px_16px_#282e3e1a]"
                        >
                          <CardContent className="p-4">
                            <h3 className="text-[#282e3e] text-[15.5px] font-semibold [font-family:'Inter-SemiBold',Helvetica] mb-4 leading-6">
                              {card.title}
                            </h3>

                            <Badge className="bg-[#edefff] text-[#2e3856] text-[11.2px] font-semibold [font-family:'Inter-SemiBold',Helvetica] rounded-full px-2 py-1 mb-8">
                              {card.terms}
                            </Badge>

                            <div className="flex items-center gap-2">
                              <Avatar className="w-6 h-6">
                                <AvatarImage src={card.avatar} />
                                <AvatarFallback>
                                  {card.author[0]}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-[#586380] text-[13.2px] font-semibold [font-family:'Inter-SemiBold',Helvetica]">
                                {card.author}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 rounded-full border-2 border-[#d9dde8] bg-white flex items-center justify-center"
                      >
                        <ChevronLeft className="w-4 h-4 text-[#4255ff]" />
                      </Button>

                      <span className="text-[#282e3e] text-[21.4px] font-semibold [font-family:'Inter-SemiBold',Helvetica]">
                        1/5
                      </span>

                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 rounded-full border-2 border-[#d9dde8] bg-white flex items-center justify-center"
                      >
                        <ChevronRight className="w-4 h-4 text-[#4255ff]" />
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer */}
            <footer className="w-full bg-white py-16 border-t border-[#edeff4]">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                  <div>
                    <h3 className="text-[#282e3e] text-[15.4px] font-bold [font-family:'Inter-Bold',Helvetica] mb-3">
                      Sobre nós
                    </h3>
                    <div className="space-y-3">
                      <div className="text-[#282e3e] text-[13.9px] font-semibold [font-family:'Inter-SemiBold',Helvetica]">
                        Sobre o Quizlet
                      </div>
                    </div>
                  </div>

                  <StudentNavSection />

                  <div>
                    <h3 className="text-[#282e3e] text-[15.1px] font-bold [font-family:'Inter-Bold',Helvetica] mb-3">
                      Para professores
                    </h3>
                    <div className="space-y-3">
                      <div className="text-[#282e3e] text-[13.2px] font-semibold [font-family:'Inter-SemiBold',Helvetica]">
                        Live
                      </div>
                      <div className="text-[#282e3e] text-sm font-semibold [font-family:'Inter-SemiBold',Helvetica]">
                        Blog
                      </div>
                      <div className="text-[#282e3e] text-[13.6px] font-semibold [font-family:'Inter-SemiBold',Helvetica]">
                        Quizlet Plus para professores
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#282e3e] text-[14.8px] font-bold [font-family:'Inter-Bold',Helvetica] mb-3">
                      Recursos
                    </h3>
                    <ReviewSection />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                  <img
                    src="/placeholder-logo.svg"
                    alt="Quizlet Logo"
                    className="w-[95px] h-[22px] md:w-[120px] md:h-[28px] object-contain mb-4 md:mb-0"
                  />
                  <LanguageNavSection />
                </div>

                <div className="w-full h-px bg-[#d9dde8] my-8" />

                <div className="mb-8">
                  <h3 className="text-[#282e3e] text-[14.5px] font-bold [font-family:'Inter-Bold',Helvetica] mb-4">
                    País
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-2 md:gap-4">
                    {countries.map((country, index) => (
                      <div
                        key={index}
                        className="text-[#282e3e] text-[13.5px] font-semibold [font-family:'Inter-SemiBold',Helvetica] truncate"
                      >
                        {country}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    {socialIcons.map((social, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8 rounded-full"
                      >
                        <img
                          src={social.icon}
                          alt={social.name}
                          className="w-4 h-4 object-contain"
                        />
                      </Button>
                    ))}
                  </div>
                  <div className="text-[#282e3e] text-[15.1px] font-normal [font-family:'Inter-Regular',Helvetica] text-center">
                    © 2025 Acme, Inc.
                  </div>
                  <div className="w-[100px] h-[50px] md:w-[140px] md:h-[70px]">
                    <img
                      src="/link-COPPA-safe-harbor-certification-seal.png"
                      alt="COPPA Safe Harbor"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
