import Link from "next/link";

const Calendly = () => {
  return (
    <div>
      <Link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      >
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
        <a
          href=""
          onclick="Calendly.initPopupWidget({url: 'https://calendly.com/raleighefe?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=15325c&text_color=ffffff&primary_color=ff6000'});return false;"
        >
          Schedule Meet
        </a>
      </Link>
    </div>
  );
};

export default Calendly;
