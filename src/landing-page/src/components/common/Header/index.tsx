import { memo } from "react";
import { Icon } from "../Icon";

export const Header = memo(function Header() {
  return (
    <div className="relative z-10 grid py-8 grid-cols-container-wide px-8">
      <div className="grid items-center justify-between grid-flow-col col-start-2">
        <span className="grid items-center grid-flow-col uppercase gap-x-4 auto-cols-max text-ffffff font-semibold">
          <Icon
            className="w-6 h-8"
            name="logo"
          />
          World ID Bot
        </span>

        <div className="grid grid-flow-col auto-cols-max gap-x-6 text-13 font-medium">
          {/* FIXME: add link */}
          <a
            className="hover:opacity-75 transition-opacity"
            href="#!"
          >
            About World ID Bot
          </a>

          {/* FIXME: add link */}
          <a
            className="hover:opacity-75 transition-opacity"
            href="#!"
          >
            Open source code
          </a>
        </div>
      </div>
    </div>
  );
});