import React from "react";
import TechHeader from "../../assets/TechHeader";
import WavyBg from "../Pages/WavyBg";
import ContactForm from "./ContactForm";
import DesignHeader from "../../assets/DesignHeader";
import ContactHeader from "../../assets/ContactHeader";
import GradientText from "../../assets/GradientText";

const ContactUs = () => {
  return (
    <div className="">
      <div class="max-w-screen-xl pb-8  mx-auto grid gap-8 md:grid-cols-2">
        <div class="max-w-screen-xl   grid grid-cols-1 gap-4 rounded-[24px]"></div>
        <div class="max-w-screen-xl   grid grid-cols-1 gap-4 rounded-[24px]">
          <ContactHeader />
        </div>
      </div>

      <div className="relative h-full font-raleway ">
        <div class="relative-container">
          <div class="max-w-screen-xl px-4 mx-auto grid gap-8 md:grid-cols-2">
            <div class="">
              <div>
                <p className="text-white pb-3 text-sm md:text-2xl typing-animation">
                  Contact me and let's create something amazing.
                </p>
              </div>

              <div>
                <div className=" text-white">
                  <div className="flex pb-8 pt-16 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="28"
                      viewBox="0 0 36 28"
                      fill="none"
                    >
                      <path
                        d="M32 0H4C2.075 0 0.5175 1.575 0.5175 3.5L0.5 24.5C0.5 26.425 2.075 28 4 28H32C33.925 28 35.5 26.425 35.5 24.5V3.5C35.5 1.575 33.925 0 32 0ZM32 7L18 15.75L4 7V3.5L18 12.25L32 3.5V7Z"
                        fill="url(#paint0_linear_7475_1310)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_7475_1310"
                          x1="18"
                          y1="0"
                          x2="18"
                          y2="28"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#BB96F6" />
                          <stop offset="1" stop-color="#7D3DE3" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <p className="text-center pt-2 pl-4">
                      celinetodesigns@gmail.com
                    </p>
                  </div>

                  <div className="flex text-white items-center gap-4">
                    <div className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        className="hover:scale-110 transition duration-200 ease-in-out"
                      >
                        <path
                          d="M6.37466 3.33344e-06H29.6253C33.1424 -0.00360244 35.9972 2.91851 36 6.52644V6.5387V29.462C36.0035 33.0692 33.1544 35.9971 29.6373 36H29.6253H6.37466C2.85756 36.0036 0.00351777 33.0815 2.08107e-06 29.4743V29.462V6.53798C-0.00281047 2.93077 2.8456 0.0036091 6.3627 3.33344e-06H6.37466Z"
                          fill="url(#paint0_linear_7464_1943)"
                        />
                        <path
                          d="M6.35999 25.2151V9.49177C6.35999 9.33816 6.40428 9.26172 6.50975 9.24585C6.77976 9.22999 7.19953 9.21484 7.76978 9.21484C8.34002 9.21484 8.9398 9.19898 9.60005 9.18383C10.2603 9.16869 10.8601 9.16797 11.4156 9.16797C12.7353 9.16797 13.7858 9.32158 14.5656 9.61364C15.2399 9.84369 15.8559 10.2281 16.3656 10.7372C16.7538 11.1374 17.0428 11.6285 17.2059 12.1672C17.3437 12.61 17.4147 13.0716 17.4161 13.536C17.4267 14.0293 17.3458 14.5204 17.1764 14.9819C17.0449 15.3634 16.8459 15.7182 16.5921 16.0283C16.4114 16.2684 16.1934 16.4761 15.9466 16.6434C16.2897 16.8317 16.6125 17.0581 16.9064 17.3206C17.2854 17.6639 17.5912 18.0829 17.8064 18.5516C18.0771 19.148 18.2107 19.8014 18.1966 20.4591C18.2093 21.4031 17.9259 22.3254 17.3866 23.0906C16.7918 23.8954 15.9853 24.5098 15.062 24.8603C14.0565 25.2749 12.8563 25.4906 11.4465 25.4906H9.85669C9.34692 25.4906 8.88214 25.4906 8.46237 25.4747C8.0426 25.4588 7.66782 25.4588 7.35211 25.4437C7.03781 25.4278 6.76781 25.4278 6.5421 25.4278C6.42046 25.43 6.35999 25.3535 6.35999 25.2151ZM9.61482 12.1233V15.5697H11.2503C11.6849 15.5697 12.106 15.5855 12.5258 15.6007C12.8282 15.6007 13.1291 15.6317 13.4258 15.693C13.6368 15.5055 13.8147 15.2819 13.9504 15.0309C14.0945 14.7237 14.1662 14.387 14.1606 14.0466C14.1775 13.6564 14.0664 13.2721 13.8449 12.9547C13.6093 12.6605 13.2979 12.442 12.9449 12.3245C12.4548 12.1694 11.9429 12.0966 11.4303 12.1088H10.7258C10.5155 12.1088 10.3201 12.1088 10.1555 12.1247C9.99029 12.1074 9.81029 12.1233 9.61482 12.1233ZM9.61482 18.4766V22.5692C9.88482 22.585 10.1548 22.6002 10.4403 22.6002C10.7258 22.6002 11.0401 22.616 11.4303 22.616C12.0224 22.6283 12.613 22.5562 13.1861 22.4004C13.6248 22.2901 14.0214 22.0499 14.3258 21.7074C14.5888 21.3778 14.7266 20.9632 14.7161 20.5384C14.7252 20.1259 14.6162 19.7184 14.4004 19.3694C14.1901 19.0456 13.8006 18.7997 13.2458 18.6468C13.0286 18.5906 12.8078 18.5502 12.5856 18.5235C12.291 18.4925 11.9956 18.4781 11.701 18.4781H9.61552V18.4766H9.61482Z"
                          fill="#6634AA"
                        />
                        <path
                          d="M27.9005 20.2014H23.1459C23.2036 20.6672 23.3618 21.1151 23.6114 21.5095C23.8765 21.9242 24.259 22.2466 24.7069 22.4326C25.3151 22.6886 25.9697 22.8098 26.6271 22.786C27.1496 22.786 27.672 22.7406 28.1874 22.6468C28.6712 22.5574 29.1444 22.4124 29.5972 22.2163C29.6717 22.155 29.7174 22.1853 29.7174 22.3396V24.6927C29.7146 24.7555 29.7048 24.8175 29.6872 24.8773C29.6598 24.9199 29.6246 24.9574 29.5817 24.9855C29.0797 25.2293 28.5509 25.4103 28.006 25.5235C27.3043 25.6612 26.5906 25.724 25.8762 25.7081C24.7364 25.7081 23.7759 25.5235 22.9961 25.1701C22.2628 24.8427 21.6145 24.3422 21.1061 23.7091C20.6308 23.1163 20.2785 22.4305 20.0704 21.6942C19.6309 20.1595 19.652 18.5247 20.1301 17.0023C20.3692 16.2321 20.7517 15.5168 21.2545 14.8951C21.7509 14.28 22.3696 13.7824 23.07 13.4341C23.8554 13.0648 24.7118 12.8809 25.5745 12.8961C26.3747 12.8766 27.1686 13.0403 27.8991 13.3735C28.5186 13.6598 29.06 14.099 29.4749 14.6499C29.8735 15.1757 30.178 15.7692 30.3749 16.4038C30.5654 17.0103 30.6625 17.6434 30.6603 18.2809C30.6603 18.6502 30.6449 18.974 30.6301 19.2653C30.6153 19.5567 30.5858 19.7723 30.5703 19.9115C30.557 20.0218 30.4684 20.1055 30.3601 20.112C30.2701 20.112 30.1056 20.1278 29.8658 20.143C29.5768 20.1769 29.2864 20.192 28.996 20.1884C28.6508 20.1862 28.2908 20.2014 27.9005 20.2014ZM23.1459 17.7862H26.3114C26.7017 17.7862 26.9872 17.7862 27.1672 17.7704C27.2832 17.7682 27.3985 17.7588 27.5117 17.7394V17.5857C27.5124 17.3925 27.4815 17.1999 27.4217 17.016C27.1517 16.1514 26.3571 15.5737 25.4719 15.6004C24.6401 15.5521 23.8589 16.01 23.4764 16.7694C23.3076 17.0867 23.1958 17.43 23.1459 17.7862Z"
                          fill="#6634AA"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_7464_1943"
                            x1="18"
                            y1="0"
                            x2="18"
                            y2="36"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#BB96F6" />
                            <stop offset="1" stop-color="#7D3DE3" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="inline-flex text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="37"
                        height="37"
                        viewBox="0 0 37 37"
                        fill="none"
                        className="hover:scale-110 transition duration-200 ease-in-out"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M26.5 0.5H10.5C4.97716 0.5 0.5 4.97716 0.5 10.5V26.5C0.5 32.0228 4.97716 36.5 10.5 36.5H26.5C32.0228 36.5 36.5 32.0228 36.5 26.5V10.5C36.5 4.97716 32.0228 0.5 26.5 0.5ZM33 26.5C32.989 30.0852 30.0852 32.989 26.5 33H10.5C6.9147 32.989 4.01098 30.0852 4 26.5V10.5C4.01098 6.9147 6.9147 4.01098 10.5 4H26.5C30.0852 4.01098 32.989 6.9147 33 10.5V26.5ZM28 11C29.1046 11 30 10.1046 30 9C30 7.89544 29.1046 7 28 7C26.8954 7 26 7.89544 26 9C26 10.1046 26.8954 11 28 11ZM18.5 9.5C13.5294 9.5 9.5 13.5294 9.5 18.5C9.5 23.4706 13.5294 27.5 18.5 27.5C23.4706 27.5 27.5 23.4706 27.5 18.5C27.5054 16.1114 26.5588 13.8191 24.8698 12.1302C23.1808 10.4412 20.8886 9.49468 18.5 9.5ZM13 18.5C13 21.5376 15.4624 24 18.5 24C21.5376 24 24 21.5376 24 18.5C24 15.4624 21.5376 13 18.5 13C15.4624 13 13 15.4624 13 18.5Z"
                          fill="url(#paint0_linear_7464_1970)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_7464_1970"
                            x1="18.5"
                            y1="0.5"
                            x2="18.5"
                            y2="36.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#BB96F6" />
                            <stop offset="1" stop-color="#7D3DE3" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="inline-flex text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        className="hover:scale-110 transition duration-200 ease-in-out"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 0H32C34.2092 0 36 1.79086 36 4V32C36 34.2092 34.2092 36 32 36H4C1.79086 36 0 34.2092 0 32V4C0 1.79086 1.79086 0 4 0ZM10 30C10.5523 30 11 29.5522 11 29V15C11 14.4478 10.5523 14 10 14H7C6.44772 14 6 14.4478 6 15V29C6 29.5522 6.44772 30 7 30H10ZM8.5 12C6.84314 12 5.5 10.6569 5.5 9C5.5 7.34314 6.84314 6 8.5 6C10.1569 6 11.5 7.34314 11.5 9C11.5 10.6569 10.1569 12 8.5 12ZM29 30C29.5522 30 30 29.5522 30 29V19.8C30.065 16.6216 27.7152 13.909 24.56 13.52C22.354 13.3185 20.2166 14.3488 19 16.2V15C19 14.4478 18.5522 14 18 14H15C14.4478 14 14 14.4478 14 15V29C14 29.5522 14.4478 30 15 30H18C18.5522 30 19 29.5522 19 29V21.5C19 19.8432 20.3432 18.5 22 18.5C23.6568 18.5 25 19.8432 25 21.5V29C25 29.5522 25.4478 30 26 30H29Z"
                          fill="url(#paint0_linear_7464_1956)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_7464_1956"
                            x1="18"
                            y1="0"
                            x2="18"
                            y2="36"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#BB96F6" />
                            <stop offset="1" stop-color="#7D3DE3" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="inline-flex text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="28"
                        viewBox="0 0 16 28"
                        fill="none"
                        className="hover:scale-110 transition duration-200 ease-in-out"
                      >
                        <path
                          d="M14.75 5H10.25C9.42155 5 8.75 5.67158 8.75 6.5V11H14.75C14.9206 10.9962 15.0824 11.0756 15.1838 11.2129C15.2852 11.3501 15.3137 11.528 15.26 11.69L14.15 14.99C14.0477 15.2928 13.7647 15.4976 13.445 15.5H8.75V26.75C8.75 27.1642 8.41415 27.5 8 27.5H4.25C3.83579 27.5 3.5 27.1642 3.5 26.75V15.5H1.25C0.83579 15.5 0.5 15.1642 0.5 14.75V11.75C0.5 11.3358 0.83579 11 1.25 11H3.5V6.5C3.5 3.18629 6.18635 0.5 9.5 0.5H14.75C15.1642 0.5 15.5 0.83579 15.5 1.25V4.25C15.5 4.66421 15.1642 5 14.75 5Z"
                          fill="url(#paint0_linear_7464_1974)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_7464_1974"
                            x1="8"
                            y1="0.5"
                            x2="8"
                            y2="27.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#BB96F6" />
                            <stop offset="1" stop-color="#7D3DE3" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-screen-xl   grid grid-cols-1 gap-4 rounded-[24px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;