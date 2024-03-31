import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function HomePage() {
  return (
    <>
      <div className="h-[2500] overflow-y-scroll">
        <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
            <div className="absolute inset-0 bg-zinc-900" />
            <div className="relative z-20 flex items-center text-lg font-medium">
              <svg
                width="120"
                height="120"
                viewBox="0 0 1396 957"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0
                0V440.712H58.2132V247.722C58.2132 233.38 60.2169 220.198 64.2243 208.175C68.4427
                195.942 74.2429 185.396 81.625 176.538C89.0071 167.679 97.6547 160.93 107.568
                156.29C117.481 151.439 128.449 149.013 140.471 149.013C165.57 149.013 182.76 155.973
                192.04 169.894C201.321 183.604 205.961 202.586 205.961
                226.842V440.712H264.49V220.514C264.49 199.211 261.854 181.178 256.581 166.414C251.308
                151.439 243.926 139.205 234.435 129.714C224.943 120.223 213.659 113.368 200.582
                109.15C187.506 104.72 172.952 102.506 156.923 102.506C131.823 102.506 111.364 108.095
                95.5456 119.274C79.7268 130.241 67.2826 145.428 58.2132 164.832V0H0ZM583.22
                0V440.712H641.433V0H583.22ZM680.259 440.712V0H738.472V440.712H680.259ZM758.632
                275.564C758.632 250.464 761.585 227.263 767.49 205.961C773.607 184.447 782.782 166.203
                795.015 151.228C807.459 136.042 822.962 124.125 841.522 115.477C860.083 106.83 881.913
                102.506 907.012 102.506C932.111 102.506 953.941 106.83 972.502 115.477C991.063 124.125
                1006.46 136.042 1018.69 151.228C1030.93 166.203 1040.1 184.447 1046.22 205.961C1052.33
                227.263 1055.39 250.464 1055.39 275.564C1055.39 301.085 1052.33 324.391 1046.22
                345.483C1040.1 366.574 1030.93 384.713 1018.69 399.899C1006.46 415.085 990.957 427.002
                972.186 435.65C953.625 444.297 931.9 448.621 907.012 448.621C881.913 448.621 860.083
                444.297 841.522 435.65C822.962 427.002 807.459 415.085 795.015 399.899C782.782 384.713
                773.607 366.574 767.49 345.483C761.585 324.391 758.632 301.085 758.632 275.564ZM820.009
                326.816C820.009 337.995 822.329 348.225 826.969 357.505C831.82 366.785 838.148 374.695
                845.952 381.233C853.756 387.561 862.93 392.623 873.476 396.419C884.022 400.005 895.201
                401.798 907.012 401.798C918.613 401.798 929.686 400.005 940.232 396.419C950.778
                392.623 959.952 387.561 967.756 381.233C975.56 374.695 981.782 366.785 986.423
                357.505C991.274 348.225 993.699 337.995 993.699 326.816V224.311C993.699 213.132
                991.274 202.903 986.423 193.622C981.782 184.342 975.56 176.432 967.756 169.894C959.952
                163.356 950.778 158.293 940.232 154.708C929.686 150.911 918.613 149.013 907.012
                149.013C895.412 149.013 884.233 150.911 873.476 154.708C862.93 158.293 853.756
                163.356 845.952 169.894C838.148 176.432 831.82 184.342 826.969 193.622C822.329
                202.903 820.009 213.132 820.009 224.311V326.816ZM280.854 275.564C280.854 250.464
                283.912 227.263 290.028 205.961C296.356 184.447 305.636 166.203 317.87 151.228C330.314 136.042 345.289 124.125 362.795 115.477C380.301 106.83 400.444 102.506 423.223 102.506C447.056 102.506 467.832 106.619 485.549 114.845C503.266 123.07 517.925 134.354 529.525 148.697C541.125 162.828 549.879 179.491 555.784 198.684C561.69 217.878 564.643 238.548 564.643 260.694V291.699H342.23V326.816C342.23 338.839 344.445 349.49 348.874 358.77C353.515 368.051 359.737 375.96 367.541 382.499C375.344 388.826 384.098 393.677 393.8 397.052C403.502 400.216 413.521 401.798 423.855 401.798C444.525 401.798 462.453 396.525 477.639 385.979C492.826 375.433 501.473 358.665 503.582 335.675H562.112C560.846 353.392 556.206 369.211 548.191 383.131C540.176 396.841 529.736 408.547 516.87 418.249C504.215 427.951 489.873 435.439 473.843 440.712C457.813 445.985 440.94 448.621 423.223 448.621C399.389 448.621 378.508 444.297 360.58 435.65C342.863 427.002 327.994 415.085 315.971 399.899C304.16 384.713 295.301 366.574 289.396 345.483C283.701 324.391 280.854 301.085 280.854 275.564ZM342.23 245.191H504.215V226.842C504.215 214.819 502 203.957 497.571 194.255C493.353 184.553 487.447 176.327 479.854 169.578C472.472 162.828 463.824 157.766 453.911 154.392C444.209 150.806 433.98 149.013 423.223 149.013C412.466 149.013 402.236 150.806 392.534 154.392C382.832 157.766 374.184 162.828 366.591 169.578C358.998 176.327 352.987 184.553 348.558 194.255C344.34 203.957 342.23 214.819 342.23 226.842V245.191ZM1334.75 569.061V508H1395.5V569.061H1334.75ZM1336.02 948.712V618.415H1394.23V948.712H1336.02ZM858.062 618.415V898.724H814.807V723.136C814.807 703.731 811.643 686.963 805.316 672.832C799.199 658.49 790.446 646.784 779.056 637.714C767.878 628.645 754.59 621.895 739.193 617.466C724.007 612.826 707.555 610.506 689.838 610.506C672.121 610.506 655.564 613.142 640.167 618.415C624.77 623.477 611.377 630.754 599.988 640.245C588.598 649.737 579.529 661.021 572.779 674.097C566.03 686.963 562.655 701.2 562.655 716.808H621.185C621.185 695.506 627.301 680.214 639.535 670.934C651.979 661.653 668.536 657.013 689.206 657.013C699.541 657.013 708.926 658.068 717.363 660.177C725.8 662.075 732.971 665.555 738.877 670.617C744.993 675.468 749.633 682.112 752.797 690.549C756.172 698.986 757.859 709.637 757.859 722.503V749.079L650.291 758.886C617.388 761.839 592.711 772.596 576.259 791.157C559.808 809.717 551.582 831.969 551.582 857.912C551.582 870.989 553.902 883.538 558.542 895.561C563.393 907.583 570.143 917.918 578.79 926.565C588.493 936.479 599.988 943.966 613.275 949.028C626.563 954.09 641.433 956.621 657.884 956.621C682.562 956.621 703.759 951.032 721.476 939.853C739.193 928.464 752.586 911.063 761.656 887.651H764.187L765.452 948.712H858.062H864.161H916.275V755.722C916.275 741.38 918.173 728.198 921.97 716.175C925.977 703.942 931.461 693.396 938.422 684.538C945.382 675.679 953.291 668.93 962.15 664.29C971.008 659.439 980.605 657.013 990.94 657.013C1012.45 657.013 1027.85 663.973 1037.13 677.894C1046.41 691.604 1051.05 710.586 1051.05 734.842V948.712H1109.58V755.722C1109.58 741.38 1111.48 728.198 1115.28 716.175C1119.07 703.942 1124.45 693.396 1131.41 684.538C1138.37 675.679 1146.28 668.93 1155.14 664.29C1164 659.439 1173.59 657.013 1183.93 657.013C1205.65 657.013 1221.16 663.973 1230.44 677.894C1239.72 691.604 1244.36 710.586 1244.36 734.842V948.712H1302.57V728.514C1302.57 707.211 1299.93 689.178 1294.66 674.414C1289.6 659.439 1282.43 647.206 1273.15 637.714C1263.87 628.223 1252.9 621.368 1240.24 617.15C1227.8 612.721 1214.41 610.506 1200.06 610.506C1175.6 610.506 1155.03 617.044 1138.37 630.121C1121.71 642.987 1109.9 659.122 1102.94 678.527C1095.55 655.115 1083.43 637.925 1066.55 626.957C1049.68 615.99 1030.28 610.506 1008.34 610.506C985.14 610.506 965.841 616.412 950.444 628.223C935.047 639.823 923.657 654.693 916.275 672.832V618.415H858.062ZM613.275 865.821C613.275 881.007 618.548 892.186 629.094 899.357C639.64 906.317 654.193 909.798 672.754 909.798C699.119 909.798 719.894 900.412 735.08 881.64C750.266 862.869 757.859 838.613 757.859 808.874V794.004L640.484 804.761C628.461 805.604 620.868 808.768 617.705 814.252C614.752 819.736 613.275 827.223 613.275 836.715V865.821ZM476.69 508V569.061H537.434V508H476.69ZM477.955 618.415V948.712H536.169V618.415H477.955ZM0 948.712V618.415H58.2132V672.832C65.5953 654.693 76.9848 639.823 92.3818 628.223C107.779 616.412 127.078 610.506 150.279 610.506C172.214 610.506 191.618 615.99 208.492 626.957C225.365 637.925 237.493 655.115 244.875 678.527C251.835 659.122 263.647 642.987 280.309 630.121C296.972 617.044 317.536 610.506 342.002 610.506C356.345 610.506 369.738 612.721 382.182 617.15C394.837 621.368 405.805 628.223 415.085 637.714C424.366 647.206 431.537 659.439 436.599 674.414C441.872 689.178 444.508 707.211 444.508 728.514V948.712H386.295V734.842C386.295 710.586 381.655 691.604 372.375 677.894C363.094 663.973 347.592 657.013 325.867 657.013C315.532 657.013 305.936 659.439 297.077 664.29C288.219 668.93 280.309 675.679 273.349 684.538C266.389 693.396 261.01 703.942 257.214 716.175C253.417 728.198 251.519 741.38 251.519 755.722V948.712H192.989V734.842C192.989 710.586 188.349 691.604 179.069 677.894C169.788 663.973 154.392 657.013 132.878 657.013C122.543 657.013 112.946 659.439 104.088 664.29C95.2292 668.93 87.3198 675.679 80.3595 684.538C73.3992 693.396 67.9154 703.942 63.908 716.175C60.1115 728.198 58.2132 741.38 58.2132 755.722V948.712H0ZM1033.5 441H1395V393H1033.5V441Z"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">build, your way</p>
                <footer className="text-sm">
                  miami&apos;s engineering community
                </footer>
              </blockquote>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 z-0 h-full w-full object-cover"
            src="/background.mp4"
          />
        </div>
        <div className="h-[500]"></div>
      </div>
    </>
  );
}
