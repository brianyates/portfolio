import React from "react";

const RecaptchaMessage = () => {
  return (
    <div>
      <div className="pb-1">
        <p className="text-gray-500 font-size-12">
          This form is protected by reCAPTCHA
        </p>
      </div>
      <div>
        <div>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
        </div>
        <div>
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecaptchaMessage;
