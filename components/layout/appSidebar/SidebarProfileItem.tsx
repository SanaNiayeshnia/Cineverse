import Image from "next/image";
import React from "react";
const fakeUser = {
  username: "SanaNia",
  email: "niayeshnia1381@gmail.com",
  imageUrl: "/assets/images/test.png",
};

export default function SidebarProfileItem() {
  return (
    <div className=" px-2 py-2 flex items-center gap-2 text-white text-sm hover:bg-white/7 transition-all duration-300 rounded-sm cursor-pointer">
      <div className="shrink-0 rounded-full overflow-hidden border-3  border-primary-50">
        {fakeUser?.imageUrl ? (
          <Image
            src={fakeUser?.imageUrl}
            alt={`${fakeUser?.username} profile`}
            width={40}
            height={40}
            className="size-10 object-cover object-center"
          />
        ) : (
          <div className="size-10 bg-primary-50"></div>
        )}
      </div>

      <div>
        <p>{fakeUser?.username}</p>
        <p className="text-xs text-white/70">{fakeUser?.email}</p>
      </div>
    </div>
  );
}
