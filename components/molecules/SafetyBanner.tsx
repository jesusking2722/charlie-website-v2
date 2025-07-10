const SafetyBanner = () => {
  return (
    <div className="w-full bg-[#623D88] py-2 overflow-hidden z-10 absolute top-0">
      <div className="mx-auto px-2 sm:px-3 w-full">
        <div
          className="flex items-center justify-center px-2 sm:px-4 py-1 border-2 sm:border-4 border-dashed border-[#623D88] rounded-sm"
          style={{
            background:
              "linear-gradient(90deg, #C427E0 23.2%, #844AFF 51.01%, #9812FF 73.07%)",
          }}
        >
          <div className="w-full overflow-hidden">
            <p
              className="
                inline-block 
                whitespace-nowrap 
                animate-marquee 
                text-[#E0E0E0] 
                text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 
                font-normal 
                leading-relaxed
              "
            >
              - Safety Warning | Beware of Scams! | The Little Pepe Team will
              NEVER contact you directly through social media or messaging
              platforms. Always verify official links only through our website:
              charlieunicornai.eu | NEVER share your seed phrase or private key
              with anyone, not even with someone claiming to be from the team -
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyBanner;
