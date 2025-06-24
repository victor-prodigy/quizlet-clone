import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { users } from "@/constants";
import { ListChecks, Users } from "lucide-react";
import React from "react";

export default function UserStudySection(): JSX.Element {
  return (
    <section className="w-full py-4 px-0">
      <div className="flex flex-row gap-4 w-full">
        {users.map((user, index) => (
          <Card
            key={index}
            className="w-full bg-[#202040] border-2 border-solid border-[#2e3856] rounded-lg overflow-hidden"
          >
            <CardContent className="p-0 relative h-[188px]">
              <div className="p-[18px]">
                <Avatar className="w-16 h-16 rounded-[64px] shadow-[inset_0px_0px_1px_#0000004c]">
                  <AvatarImage
                    src={user.avatar}
                    alt={user.username}
                    className="bg-cover bg-center"
                  />
                  <AvatarFallback>
                    {user.username.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="absolute top-[104px] left-[18px]">
                <h3 className="[font-family:'Inter-Bold',Helvetica] font-bold text-[19px] text-[#d9dde8] tracking-[0] leading-7 whitespace-nowrap">
                  {user.username}
                </h3>
              </div>

              {user.badges && user.badges.length > 0 && (
                <div className="absolute top-[110px] left-[125px]">
                  <Badge className="bg-[#d9dde8] text-[#2e3856] rounded-[200px] h-5 px-2 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[11.4px]">
                    {user.badges[0]}
                  </Badge>
                </div>
              )}

              <div className="absolute bottom-[18px] left-[18px] flex gap-2">
                <Badge className="bg-[#586380] text-[#f6f7fb] rounded-[200px] h-5 pl-2 pr-3 flex items-center [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[11.2px]">
                  <ListChecks className="w-4 h-4 mr-1" />
                  {user.cardLists}
                </Badge>

                <Badge className="bg-[#586380] text-[#f6f7fb] rounded-[200px] h-5 pl-2 pr-3 flex items-center [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[11.2px]">
                  <Users className="w-4 h-4 mr-1" />
                  {user.classes}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
