import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { EngFlagIcon, RusFlagIcon } from "../../assets/icons";
import i18n from "@/i18n";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const languages = [
  { code: "ru", label: "Russian", icon: <RusFlagIcon /> },
  { code: "en", label: "English", icon: <EngFlagIcon /> },
];

const SwitchLanguages = () => {
  const [currentLang, setCurrentLang] = useState<string>("ru");
  const [isOpenLang, setOpenLang] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("appLang");
    const initialLang = storedLang && languages.some((l) => l.code === storedLang) ? storedLang : "ru";

    setCurrentLang(initialLang);
    i18n.changeLanguage(initialLang);
  }, []);

  const handleSelect = (lang: string) => {
    setCurrentLang(lang);
    localStorage.setItem("appLang", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu onOpenChange={setOpenLang}>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center cursor-pointer gap-2 rounded-md bg-(--gray-color) px-3 py-1">
          <span className="text-(--pale-sand) text-[14px] font-[600] flex gap-2 items-center">
            {languages.find((l) => l.code === currentLang)?.icon}
            {languages.find((l) => l.code === currentLang)?.label}
          </span>
          <ChevronDown className={`text-(--pale-sand) w-[18px] transition-transform ${isOpenLang ? "rotate-180" : ""}`} />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[140px] bg-(--gray-color)">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className={`text-(--pale-sand) flex items-center gap-2 text-[14px] cursor-pointer font-[600] ${currentLang === lang.code ? "bg-(--pale-sand) text-(--gray-color)" : ""}`}
          >
            {lang.icon}
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SwitchLanguages;
