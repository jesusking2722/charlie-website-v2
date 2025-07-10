import { useState, useEffect } from "react";
import { useTranslator } from "./Translator";

const Translate = ({ children }: { children: React.ReactNode }) => {
  const { translateText, to } = useTranslator();
  const [translated, setTranslated] = useState(children);

  useEffect(() => {
    const translate = async () => {
      const result = await translateText(children);
      setTranslated(result);
    };

    translate();
  }, [children, to]);

  return <>{translated}</>;
};

export default Translate;
