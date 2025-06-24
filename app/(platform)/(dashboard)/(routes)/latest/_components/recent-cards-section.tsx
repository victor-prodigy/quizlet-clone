import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import React from "react";

const RecentCardsSection = (): JSX.Element => {
  // Data for the book cards
  const bookCards = [
    {
      title: "Anatomia y Fisiologia Humana",
      edition: "9th Edition",
      isbn: "9788478290949",
      authors: "Elaine N. Marieb",
      solutions: "614 soluções",
      coverImage:
        "/anatomia-y-fisiologia-humana-9th-edition-by-elaine-n-marieb.png",
    },
    {
      title: "Introduction to Fluid Mechanics",
      edition: "7th Edition",
      isbn: "9780471742999",
      authors: "Alan T. McDonald, Philip J. Pritchard, Robert…",
      solutions: "1.383 soluções",
      coverImage:
        "/introduction-to-fluid-mechanics-7th-edition-by-alan-t-mcdonald-philip-j-pritchard-robert-w-fox.png",
    },
    {
      title: "Algebra 1",
      edition: "1st Edition",
      isbn: "9780076639236",
      authors: "Carter, Cuevas, Day, Holliday, Luchin, Malloy",
      solutions: "7.885 soluções",
      coverImage:
        "/algebra-1-1st-edition-by-carter-cuevas-day-holliday-luchin-malloy.png",
    },
  ];

  return (
    <section className="w-full py-6">
      <div className="flex gap-4 overflow-x-auto">
        {bookCards.map((book, index) => (
          <Card
            key={index}
            className="w-[391px] h-[156px] bg-[#202040] border-2 border-solid border-[#2e3856] flex-shrink-0"
          >
            <CardContent className="p-0">
              <div className="relative w-full h-[152px] p-0.5">
                <div className="flex p-4 h-full">
                  <div className="w-[93px] h-[124px] rounded-lg overflow-hidden">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="ml-6 w-[270px]">
                    <div className="mb-2">
                      <h3 className="font-semibold text-[15.5px] text-[#f6f7fb] leading-6 truncate">
                        {book.title}
                      </h3>
                    </div>

                    <div className="flex items-center mb-2">
                      <span className="text-[11.4px] font-semibold text-[#d9dde8] leading-4">
                        {book.edition}
                      </span>
                      <span className="mx-2 text-xs font-semibold text-[#d9dde8]">
                        •
                      </span>
                      <span className="text-[10.9px] font-semibold text-[#d9dde8] leading-4">
                        ISBN: {book.isbn}
                      </span>
                    </div>

                    <div className="mb-6">
                      <p className="text-[11.6px] font-semibold text-[#d9dde8] leading-4 truncate">
                        {book.authors}
                      </p>
                    </div>

                    <Badge className="bg-[#586380] text-[#f6f7fb] h-5 px-2 rounded-full">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      <span className="text-[11.1px] font-semibold">
                        {book.solutions}
                      </span>
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RecentCardsSection;
