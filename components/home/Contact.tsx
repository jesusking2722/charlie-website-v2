import Image from "next/image";
import BackgroundImage from "@/public/assets/pngs/contact_bg.png";
import ContactImage from "@/public/assets/pngs/contact.png";
import ArrowRightIcon from "@/public/assets/svgs/arrow_right.svg";
import { Button, Translate } from "../common";
import { useForm } from "@formspree/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTranslator } from "../common/Translator";
import { useLanguage } from "../providers/LanguageProvider";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidMessage, setIsInvalidMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, handleSubmit] = useForm("mvgzekqb");
  const [emailTranslate, setEmailTranslate] = useState<string>(
    "anthonyhopkins@gmail.com"
  );
  const [messageTranslate, setMessageTranslate] = useState<string>(
    "What is your opinion"
  );

  const { translateText } = useTranslator();
  const { language } = useLanguage();

  const isValidEmail = (email: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const isValid = () => {
    if (!isValidEmail(email)) {
      setIsInvalidEmail(true);
      return false;
    } else {
      setIsInvalidEmail(false);
    }

    if (message.trim().length === 0) {
      setIsInvalidMessage(true);
      return false;
    } else {
      setIsInvalidMessage(false);
    }

    return true;
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    if (!isValid() || state.submitting) return;

    setLoading(true);

    await handleSubmit({ email, message });

    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Submitted");
      setEmail("");
      setMessage("");
      setLoading(false);
    }
  }, [state.succeeded]);

  useEffect(() => {
    const translatePlaceholder = async () => {
      const translatedEmail = await translateText(emailTranslate);
      const translatedMessage = await translateText(messageTranslate);
      setEmailTranslate(translatedEmail);
      setMessageTranslate(translatedMessage);
    };

    translatePlaceholder();
  }, [language]);

  return (
    <section
      id="contact"
      className="w-full relative overflow-hidden xl:mb-0 lg:mb-0 mb-14"
    >
      <Image
        src={BackgroundImage}
        alt="Contact Background"
        className="w-full h-auto xl:flex lg:flex hidden"
      />

      <div className="absolute inset-0 xl:flex lg:flex hidden flex-col items-center justify-center">
        <div className="w-[80%] mx-auto space-y-14">
          <h1 className="text-white font-black text-7xl text-center">
            <Translate>Contact Us</Translate>
          </h1>
          <div className="w-full flex items-center justify-between gap-14">
            <div className="w-2/5">
              <Image
                src={ContactImage}
                alt="Contact"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="w-3/5">
              <form className="w-full space-y-8" onSubmit={handleFormSubmit}>
                <div className="space-y-1">
                  <div className="relative w-full h-16 bg-gradient-to-r from-[#c427e0]/50 via-[#844aff]/50 to-[#12a9ff]/50 rounded-lg">
                    <input
                      type="email"
                      name="email"
                      placeholder={emailTranslate}
                      className="absolute inset-[1px] bg-[rgba(40,12,63,0.6)] rounded-lg text-white placeholder:text-[#BDBDBD] text-[20px] py-2 px-4 border-none outline-none"
                    />
                  </div>

                  {isInvalidEmail && (
                    <p className="text-red-500 text-sm font-semibold px-1">
                      <Translate>Wrong email format</Translate>
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="relative w-full h-[225px] bg-gradient-to-r from-[#c427e0]/50 via-[#844aff]/50 to-[#12a9ff]/50 rounded-lg">
                    <textarea
                      name="message"
                      placeholder={messageTranslate}
                      className="absolute inset-[1px] bg-[rgba(40,12,63,0.6)] rounded-lg text-white placeholder:text-[#BDBDBD] text-[20px] py-2 px-4 border-none outline-none resize-none overflow-x-hidden overflow-y-auto"
                    />
                  </div>

                  {isInvalidMessage && (
                    <p className="text-red-500 text-sm font-semibold px-1">
                      <Translate>Message is required</Translate>
                    </p>
                  )}
                </div>

                <Button
                  type="primary"
                  label="Submit"
                  icon={ArrowRightIcon}
                  loading={loading}
                  hovered={true}
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:hidden lg:hidden flex w-[95%] mx-auto flex-col gap-6">
        <h1 className="text-white font-black text-4xl text-left">Contact Us</h1>
        <Image
          src={ContactImage}
          alt="Contact"
          className="w-full h-auto object-cover"
        />
        <form className="w-full space-y-6" onSubmit={handleFormSubmit}>
          <div className="space-y-1">
            <div className="relative w-full h-16 bg-gradient-to-r from-[#c427e0]/50 via-[#844aff]/50 to-[#12a9ff]/50 rounded-lg">
              <input
                type="email"
                name="email"
                placeholder={emailTranslate}
                className="absolute inset-[1px] bg-[rgba(40,12,63,0.6)] rounded-lg text-white placeholder:text-[#BDBDBD] text-[20px] py-2 px-4 border-none outline-none"
              />
            </div>

            {isInvalidEmail && (
              <p className="text-red-500 text-sm font-semibold px-1">
                <Translate>Wrong email format</Translate>
              </p>
            )}
          </div>

          <div className="space-y-1">
            <div className="relative w-full h-[225px] bg-gradient-to-r from-[#c427e0]/50 via-[#844aff]/50 to-[#12a9ff]/50 rounded-lg">
              <textarea
                name="message"
                placeholder={messageTranslate}
                className="absolute inset-[1px] bg-[rgba(40,12,63,0.6)] rounded-lg text-white placeholder:text-[#BDBDBD] text-[20px] py-2 px-4 border-none outline-none resize-none overflow-x-hidden overflow-y-auto"
              />
            </div>

            {isInvalidMessage && (
              <p className="text-red-500 text-sm font-semibold px-1">
                <Translate>Message is required</Translate>
              </p>
            )}
          </div>

          <Button
            type="primary"
            label="Submit"
            icon={ArrowRightIcon}
            loading={loading}
            hovered={true}
            width="full"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
