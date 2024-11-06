"use client";
import ProjectCard from "@/components/projects-comps/project_card";
import EachElement from "@/components/widgets/list_rendering";
import React from "react";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";
import { caseStudies, clients, IProject } from "@/utils";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

const Projects = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <section className="relative">
        <div className="wrapper overflow-[hidden_!important]">
          {/* HEADING */}
          <div className="relative pt-[150px] lg:static">
            <svg
              className="absolute -left-5 bottom-0 h-[150px] w-[150px] lg:bottom-auto lg:left-[6rem] lg:top-[10rem] lg:h-[250px] lg:w-[500px]"
              width="359"
              height="358"
              viewBox="0 0 359 358"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_571_2686)">
                <path
                  d="M246.114 305.191L215.571 314.571L161.832 144.204L160.9 141.26L114.83 155.429L60.5936 172.098L43.9562 119.354L174.786 79.1063L175.712 82.0745L192.374 134.824L246.114 305.191Z"
                  stroke="#229EFF"
                  stroke-width="0.20339"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M161.832 144.204L115.762 158.373L60.5943 172.098L114.83 155.429L160.901 141.261L161.832 144.204Z"
                  stroke="#229EFF"
                  stroke-width="0.20339"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M301.281 291.466L270.738 300.845L215.571 314.571L246.114 305.191L301.281 291.466Z"
                  stroke="#229EFF"
                  stroke-width="0.20339"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M301.281 291.466L246.113 305.191L192.373 134.824L175.711 82.0743L174.785 79.1061L229.952 65.3806L301.281 291.466Z"
                  stroke="#229EFF"
                  stroke-width="0.20339"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_571_2686">
                  <rect
                    width="300"
                    height="300"
                    fill="white"
                    transform="translate(65.4111) rotate(12.5938)"
                  />
                </clipPath>
              </defs>
            </svg>

            {/* CONE PATTERN */}
            <svg
              className="absolute -right-[140px] -top-[20px] h-[200px] w-[376px] -rotate-[20deg] lg:-right-[12rem] lg:top-3 lg:h-[400px] lg:w-[500px] lg:scale-150"
              width="876"
              height="615"
              viewBox="0 0 876 615"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M323.877 -34.9275C323.877 -13.6303 317.287 0.755448 304.107 8.22958C290.927 15.7841 275.014 14.1767 256.53 3.48792C237.965 -7.20088 222.132 -23.9172 208.952 -46.6611C195.692 -69.4853 189.102 -91.5058 189.102 -112.723C189.102 -133.94 195.692 -148.406 208.952 -155.88L213.131 -157.969C225.427 -163.032 239.893 -160.702 256.53 -151.138C275.014 -140.449 290.927 -123.733 304.107 -100.989C317.287 -78.1649 323.877 -56.2248 323.877 -34.9275Z"
                stroke="#229EFF"
                stroke-width="0.220183"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M526.08 545.724C526.08 567.021 519.41 581.407 506.229 588.881C493.049 596.435 477.217 594.828 458.652 584.139C440.168 573.451 424.255 556.734 411.075 533.99C397.895 511.166 391.305 489.146 391.305 467.929C391.305 446.712 397.895 432.246 411.075 424.772L415.254 422.682C427.55 417.619 442.097 419.95 458.652 429.513C477.217 440.202 493.049 456.918 506.229 479.662C519.41 502.486 526.08 524.427 526.08 545.724Z"
                stroke="#229EFF"
                stroke-width="0.220183"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M323.877 429.032C323.877 450.249 317.287 464.635 304.107 472.19C290.927 479.744 275.014 478.137 256.53 467.448C237.965 456.759 222.132 440.043 208.952 417.219C195.692 394.475 189.102 372.454 189.102 351.237C189.102 330.02 195.692 315.554 208.952 308C222.132 300.526 237.965 302.053 256.53 312.822C275.014 323.511 290.927 340.227 304.107 362.971C317.287 385.715 323.877 407.735 323.877 429.032Z"
                stroke="#229EFF"
                stroke-width="0.220183"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M526.08 313.785C526.08 335.002 519.41 349.388 506.229 356.942C499.398 360.88 491.924 362.327 483.646 361.282C475.931 360.398 467.653 357.344 458.652 352.201C440.168 341.512 424.255 324.715 411.075 301.971C397.895 279.227 391.305 257.207 391.305 235.91C391.305 231.409 391.626 227.15 392.269 223.292C394.439 208.906 400.708 198.7 411.075 192.753C424.255 185.278 440.168 186.805 458.652 197.494C477.217 208.263 493.049 224.98 506.229 247.724C519.41 270.467 526.08 292.488 526.08 313.785Z"
                stroke="#229EFF"
                stroke-width="0.220183"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M323.877 197.012C323.877 218.309 317.287 232.695 304.107 240.249C290.927 247.723 275.014 246.197 256.53 235.427C237.965 224.739 222.132 208.022 208.952 185.278C195.692 162.535 189.102 140.514 189.102 119.217C189.102 97.9195 195.692 83.6142 208.952 76.0597L213.131 73.9701C225.427 68.907 239.893 71.2377 256.53 80.8013C275.014 91.4901 290.927 108.206 304.107 131.031C317.287 153.775 323.877 175.795 323.877 197.012Z"
                stroke="#229EFF"
                stroke-width="0.220183"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M526.08 81.7654C526.08 103.063 519.41 117.448 506.229 125.003C499.479 128.86 491.924 130.307 483.727 129.262C476.011 128.378 467.653 125.324 458.652 120.181C440.168 109.492 424.255 92.7756 411.075 70.0318C397.895 47.2879 391.305 25.2674 391.305 3.97015C391.305 -0.530397 391.626 -4.78986 392.189 -8.64747C394.439 -23.1135 400.708 -33.3201 411.075 -39.1869L415.254 -41.2765C427.55 -46.3396 442.097 -44.0089 458.652 -34.4453C477.217 -23.7565 493.049 -7.04014 506.229 15.7841C519.41 38.5279 526.08 60.5485 526.08 81.7654Z"
                stroke="#229EFF"
                stroke-width="0.220183"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M483.647 361.282C481.477 375.668 475.208 385.875 464.841 391.822L460.662 393.911L304.107 472.189C317.287 464.634 323.877 450.249 323.877 429.032C323.877 407.815 317.287 385.714 304.107 362.97C290.927 340.226 275.014 323.51 256.53 312.821C237.965 302.052 222.132 300.525 208.952 307.999L369.686 227.632C376.518 223.774 383.992 222.328 392.27 223.292C391.627 227.15 391.305 231.409 391.305 235.91C391.305 257.207 397.895 279.228 411.075 301.972C424.256 324.715 440.168 341.512 458.653 352.201C467.654 357.344 475.932 360.398 483.647 361.282Z"
                stroke="#229EFF"
                stroke-width="0.220183"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M483.728 129.262C481.558 143.728 475.209 153.934 464.841 159.882L304.107 240.249C317.288 232.694 323.878 218.308 323.878 197.011C323.878 175.714 317.288 153.774 304.107 131.03C290.927 108.206 275.015 91.4894 256.53 80.8006C239.894 71.2369 225.428 68.9063 213.132 73.9694L369.687 -4.30806C376.438 -8.16567 383.992 -9.69265 392.19 -8.64788C391.627 -4.79027 391.306 -0.530807 391.306 3.96974C391.306 25.267 397.896 47.2875 411.076 70.0314C424.256 92.7752 440.169 109.492 458.653 120.18C467.654 125.324 476.012 128.378 483.728 129.262Z"
                stroke="#229EFF"
                stroke-width="0.220183"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M484.612 -115.294C484.612 -93.9965 478.022 -79.6108 464.841 -72.1367L304.107 8.23025C317.288 0.756125 323.878 -13.6296 323.878 -34.9268C323.878 -56.2241 317.288 -78.1642 304.107 -100.988C290.927 -123.732 275.015 -140.449 256.53 -151.137C239.894 -160.701 225.428 -163.032 213.132 -157.969L369.687 -236.246C382.867 -243.801 398.699 -242.193 417.264 -231.505C435.749 -220.816 451.661 -204.1 464.841 -181.356C478.022 -158.531 484.612 -136.591 484.612 -115.294Z"
                stroke="#229EFF"
                stroke-width="0.220183"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M686.814 1.39886C686.814 22.6961 680.143 37.0818 666.963 44.6363L506.229 125.003C519.41 117.449 526.08 103.063 526.08 81.7658C526.08 60.4686 519.41 38.5284 506.229 15.7845C493.049 -7.03967 477.217 -23.756 458.652 -34.4448C442.096 -44.0085 427.55 -46.3391 415.254 -41.276L571.809 -119.553C584.989 -127.108 600.902 -125.501 619.386 -114.812C637.951 -104.123 653.783 -87.4067 666.963 -64.5824C680.143 -41.8386 686.814 -19.818 686.814 1.39886Z"
                stroke="#229EFF"
                stroke-width="0.220183"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M686.813 233.419C686.813 254.635 680.143 269.021 666.963 276.576L506.229 356.943C519.409 349.388 526.079 335.002 526.079 313.786C526.079 292.569 519.409 270.468 506.229 247.724C493.049 224.98 477.216 208.264 458.651 197.495C440.167 186.806 424.254 185.279 411.074 192.753L571.808 112.386C584.988 104.912 600.901 106.439 619.385 117.128C637.95 127.897 653.782 144.613 666.963 167.357C680.143 190.101 686.813 212.121 686.813 233.419Z"
                stroke="#229EFF"
                stroke-width="0.220183"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M686.814 465.357C686.814 486.655 680.143 501.04 666.963 508.514L506.229 588.881C519.41 581.406 526.08 567.021 526.08 545.723C526.08 524.427 519.41 502.487 506.229 479.663C493.049 456.919 477.217 440.202 458.652 429.514C442.096 419.95 427.55 417.619 415.254 422.682L571.809 344.405C584.989 336.851 600.902 338.458 619.386 349.147C637.951 359.835 653.783 376.552 666.963 399.296C680.143 422.12 686.814 444.06 686.814 465.357Z"
                stroke="#229EFF"
                stroke-width="0.220183"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="md:flex md:items-end md:justify-between">
              <div className="mx-auto max-w-xl text-center md:mx-0 md:w-1/2 md:text-left">
                <p className="text-secondary-200 text-sm lg:text-base">
                  {isMobile ? "Case Studies" : "Projects"}
                </p>
                <h2 className="mb-4 mt-3 font-dm-sans text-[32px] font-normal text-white md:text-[3rem]">
                  Crafting unique
                  <br className="sm:hidden md:block" /> solutions
                </h2>
                <p className="text-primary-100 text-sm font-light md:hidden">
                  Ready to transform your ideas into reality? Whether
                  you&apos;re looking for digital solutions or interested in our
                  mentorship program, we&apos;re here to help.
                </p>
              </div>
              <div className="hidden md:block md:w-1/2">
                <p className="text-primary-100 text-base font-light leading-normal">
                  Transform your career trajectory through our intensive
                  year-long mentorship program. At I-Sentry Technologies, we
                  don&apos;t just teach—we immerse you in real-world projects,
                  surround you with industry experts, and guide your journey
                  from aspiring developer to tech professional.
                </p>
              </div>
            </div>
          </div>

          {/* CASE STUDIES */}
          <div className="mt-10 grid gap-6 md:mt-24 md:grid-cols-2">
            <EachElement
              of={caseStudies}
              render={(item: IProject, index: number) => {
                return <ProjectCard key={item?.title + index} data={item} />;
              }}
            />
          </div>

          {/* PARTNERS */}
          <div className="mt-10 pb-10 md:mt-28">
            <h2 className="text-center font-dm-sans text-[20px] font-medium text-white md:text-[32px]">
              Pioneering companies trust us to
              <br className="hidden md:block" /> deliver cutting-edge solutions.
            </h2>

            <div className="relative mt-4">
              <div className="absolute left-0 top-0 z-10 h-full w-full scale-110 bg-partners"></div>

              <Marquee
                pauseOnHover
                className="[--duration:20s] [--gap:2rem] md:[--gap:5rem]"
              >
                {clients.map((client, index) => (
                  <Image
                    key={client?.name + index}
                    src={client?.brand}
                    alt={client?.name}
                    className={cn(
                      "aspect-[9/4] w-[100px]",
                      client?.name === "Porker Hut" && "scale-[1.3]",
                    )}
                  />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;