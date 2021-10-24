import React from 'react';
import s from './Logo.module.css';
// import smplLogo from "./smplLogo.png"

// function Logo() {
//     return (
//       <div className={`${s.logo}`}>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/SIMPLE-Logo.png/800px-SIMPLE-Logo.png" alt="simplaker"/>
//       </div>
//     );
//   }

function Logo() {
  return (
    <div className={`${s.logo}`}>
      {/* <img src="/img/smpl_logo_violetred.png" alt="logo"/> */}
      <svg height="36" viewBox="0 0 121 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M113.392 25.5013L119.726 26.5584C118.908 28.8809 117.628 30.6479 115.868
          31.8593C114.117 33.0784 111.918 33.6803 109.279 33.6803C105.105 33.6803 102.018
          32.3222 100.012 29.5908C98.4302 27.4072 97.6355 24.6448 97.6355 21.3193C97.6355
          17.3378 98.6771 14.2205 100.76 11.9675C102.836 9.71441 105.467 8.58789 108.646 
          8.58789C112.219 8.58789 115.035 9.76844 117.103 12.1295C119.163 14.4906 120.151
          18.1017 120.066 22.9705H104.148C104.194 24.8532 104.703 26.3192 105.683 27.3609C106.663
          28.4103 107.89 28.9349 109.348 28.9349C110.344 28.9349 111.177 28.6649 111.856 28.1248C112.535
          27.5769 113.052 26.705 113.392 25.5013V25.5013ZM63.7716 44.2185H69.6268V49.8014H63.7716V44.2185ZM0
          26.2884L6.37341 25.3161C6.64346 26.5507 7.19128 27.492 8.02462 28.1325C8.85022 28.7729 10.0076
          29.097 11.5045 29.097C13.148 29.097 14.3826 28.7961 15.2082 28.1865C15.7715 27.7698 16.0493
          27.1988 16.0493 26.4967C16.0493 26.0106 15.8949 25.6094 15.594 25.293C15.2776 24.9921 14.5678
          24.7143 13.4721 24.4597C8.34869 23.3331 5.10027 22.2992 3.72681 21.3656C1.82867 20.0693
          0.879626 18.2637 0.879626 15.9566C0.879626 13.881 1.69749 12.1295 3.341 10.7175C4.98452 9.29774
          7.53078 8.58789 10.9798 8.58789C14.2669 8.58789 16.7128 9.128 18.31 10.1928C19.9072 11.2653 21.0029
          12.8471 21.6048 14.9459L15.6172 16.0492C15.3625 15.1156 14.8764 14.398 14.1588 13.9042C13.4412
          13.4027 12.4227 13.1557 11.0956 13.1557C9.42124 13.1557 8.22524 13.3872 7.49991 13.8579C7.02152
          14.1897 6.78233 14.6218 6.78233 15.1465C6.78233 15.6017 6.99066 15.9798 7.41502 16.2961C7.98604
          16.7205 9.96134 17.3147 13.3486 18.0863C16.7282 18.8502 19.0893 19.7915 20.4319 20.9103C21.7591
          22.0445 22.4227 23.6186 22.4227 25.6325C22.4227 27.8315 21.5044 29.7297 19.6603 31.3115C17.8239
          32.8932 15.1079 33.6803 11.5045 33.6803C8.23293 33.6803 5.64807 33.0167 3.7345 31.6895C1.82867
          30.3701 0.586406 28.5646 0 26.2884V26.2884ZM24.9349 9.1357H30.7914V12.4073C32.8824 9.86102 35.3824
          8.58789 38.2759 8.58789C39.8114 8.58789 41.1462 8.90424 42.2728 9.53694C43.407 10.1696 44.3329
          11.1264 45.0583 12.4073C46.1076 11.1264 47.2496 10.1696 48.4687 9.53694C49.6878 8.90424 50.9918
          8.58789 52.3807 8.58789C54.14 8.58789 55.6369 8.95053 56.856 9.66812C58.0751 10.378 58.9856 11.4351
          59.5874 12.8162C60.0272 13.8425 60.2433 15.5014 60.2433 17.793V33.1401H53.8931V19.4211C53.8931
          17.0369 53.677 15.5014 53.2372 14.8069C52.6508 13.9042 51.748 13.449 50.5289 13.449C49.6339
          13.449 48.8005 13.719 48.0135 14.2668C47.2342 14.8069 46.6709 15.6017 46.3236 16.6511C45.9764
          17.7005 45.799 19.3517 45.799 21.6124V33.1401H39.4487V19.9844C39.4487 17.6464 39.333 16.1418
          39.1092 15.4628C38.8855 14.7838 38.5305 14.2823 38.0599 13.9505C37.5815 13.6187 36.941 13.449
          36.1231 13.449C35.1432 13.449 34.2636 13.7113 33.4843 14.2437C32.6972 14.7684 32.134 15.5323
          31.7945 16.5276C31.455 17.523 31.2852 19.1665 31.2852 21.4736V33.1401H24.9349V9.1357V9.1357ZM63.7716
          9.1357H69.239V12.6619C70.0029 11.4505 71.0446 10.4706 72.3562 9.72211C73.668 8.96596 75.1263
          8.58789 76.7235 8.58789C79.509 8.58789 81.8778 9.68355 83.8145 11.8672C85.7589 14.0508 86.7311
          17.0986 86.7311 21.0029C86.7311 25.0075 85.7512 28.1248 83.799 30.3469C81.8392 32.5692 79.4627
          33.6803 76.6772 33.6803C75.3501 33.6803 74.1464 33.4179 73.0661 32.8932C71.9936 32.3608 70.8593
          31.4581 69.6634 30.1772V42.2759H63.7716V9.1357V9.1357ZM69.6016 20.7329C69.6016 23.4257 70.1341
          25.4242 71.2066 26.705C72.2714 27.9936 73.5754 28.6417 75.1186 28.6417C76.5924 28.6417 77.8192
          28.0476 78.7991 26.8671C79.7791 25.6865 80.2729 23.7421 80.2729 21.0492C80.2729 18.5261 79.7636
          16.6588 78.7528 15.4397C77.742 14.2205 76.492 13.611 75.0028 13.611C73.452 13.611 72.1634 14.2051
          71.1372 15.4088C70.1109 16.6048 69.6016 18.3795 69.6016 20.7329V20.7329ZM89.2049
          33.1401V0H95.5552V33.1401H89.2049ZM113.754 19.0816C113.708 17.2375 113.237 15.8409 112.334
          14.8841C111.432 13.9274 110.328 13.449 109.032 13.449C107.643 13.449 106.501 13.9582 105.598
          14.969C104.696 15.9721 104.248 17.3455 104.263 19.0816H113.754V19.0816Z" fill="black" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9317 1.58679H30.7869V7.16964H24.9317V1.58679Z" fill="#C71585" />
        <path d="M73.0499 41.4045H75.1009V42.5502C75.8331 41.6585 76.7086 41.2127 77.7219 41.2127C78.2597
          41.2127 78.7271 41.3235 79.1216 41.545C79.5188 41.7666 79.8431 42.1017 80.0971 42.5502C80.4646
          42.1017 80.8645 41.7666 81.2914 41.545C81.7183 41.3235 82.175 41.2127 82.6614 41.2127C83.2775
          41.2127 83.8017 41.3396 84.2286 41.591C84.6556 41.8396 84.9744 42.2097 85.1852 42.6934C85.3392
          43.0528 85.4149 43.6338 85.4149 44.4363V49.8108H83.191V45.0064C83.191 44.1715 83.1154 43.6338
          82.9613 43.3906C82.756 43.0744 82.4398 42.915 82.0129 42.915C81.6994 42.915 81.4076 43.0096
          81.132 43.2014C80.8591 43.3906 80.6618 43.6689 80.5402 44.0364C80.4186 44.4039 80.3565 44.9821
          80.3565 45.7739V49.8108H78.1326V45.2037C78.1326 44.3849 78.0921 43.8581 78.0137 43.6203C77.9354
          43.3825 77.8111 43.2068 77.6462 43.0906C77.4787 42.9745 77.2545 42.915 76.968 42.915C76.6248
          42.915 76.3168 43.0069 76.0439 43.1933C75.7682 43.377 75.571 43.6446 75.4521 43.9931C75.3332
          44.3417 75.2738 44.9173 75.2738 45.7252V49.8108H73.0499V41.4045V41.4045ZM89.2951 43.9688L87.2766
          43.604C87.5036 42.7907 87.8927 42.1908 88.4466 41.799C89.0033 41.4099 89.8247 41.2127 90.9164
          41.2127C91.9107 41.2127 92.6484 41.3316 93.1348 41.5666C93.6185 41.8017 93.9617 42.099 94.1589
          42.4611C94.3562 42.8231 94.4561 43.4851 94.4561 44.4525L94.4318 47.0492C94.4318 47.7869 94.4669
          48.3328 94.5399 48.684C94.6102 49.0326 94.7453 49.4109 94.9398 49.8108H92.7376C92.6808 49.6622
          92.6079 49.4433 92.5241 49.1542C92.489 49.0218 92.462 48.9353 92.4458 48.8921C92.0647 49.2623
          91.6594 49.5379 91.2271 49.7244C90.7948 49.9081 90.3327 50 89.8409 50C88.9762 50 88.2926 49.7649
          87.7954 49.2974C87.2955 48.8272 87.0469 48.2328 87.0469 47.514C87.0469 47.0411 87.1604 46.6169
          87.3874 46.244C87.6144 45.8711 87.9332 45.5874 88.3412 45.3901C88.7493 45.1929 89.341 45.02
          90.1111 44.8713C91.1488 44.6768 91.8702 44.493 92.2701 44.3255V44.1039C92.2701 43.6743 92.1647
          43.3717 91.954 43.1879C91.7432 43.0069 91.346 42.915 90.7596 42.915C90.3624 42.915 90.0544
          42.9933 89.8328 43.1501C89.6112 43.3041 89.4329 43.577 89.2951 43.9688V43.9688ZM92.2701
          45.7739C91.9864 45.8684 91.5352 45.9819 90.9164 46.1143C90.3003 46.2467 89.8976 46.3764 89.7058
          46.5007C89.4167 46.7088 89.2708 46.9682 89.2708 47.2843C89.2708 47.5978 89.387 47.8653 89.6194
          48.0923C89.8517 48.3192 90.1463 48.4328 90.5056 48.4328C90.9082 48.4328 91.2892 48.3003 91.654
          48.0382C91.9243 47.8383 92.0999 47.5924 92.1837 47.3005C92.2431 47.1114 92.2701 46.7493 92.2701
          46.217V45.7739ZM96.5692 49.8108V38.2052H98.7957V44.3633L101.398 41.4045H104.138L101.266
          44.4741L104.343 49.8108H101.946L99.8307 46.0359L98.7957 47.1195V49.8108H96.5692ZM110.534
          47.1357L112.752 47.5059C112.466 48.3192 112.017 48.938 111.401 49.3623C110.788 49.7892
          110.018 50 109.094 50C107.632 50 106.551 49.5244 105.848 48.5678C105.294 47.8031 105.016 46.8358
          105.016 45.6712C105.016 44.2769 105.381 43.1852 106.11 42.3962C106.837 41.6072 107.759 41.2127
          108.872 41.2127C110.123 41.2127 111.109 41.6261 111.834 42.4529C112.555 43.2798 112.901 44.5444
          112.871 46.2494H107.297C107.313 46.9088 107.491 47.4222 107.834 47.7869C108.178 48.1544 108.607
          48.3381 109.118 48.3381C109.466 48.3381 109.758 48.2436 109.996 48.0544C110.234 47.8626 110.415
          47.5573 110.534 47.1357V47.1357ZM110.661 44.8876C110.645 44.2418 110.48 43.7527 110.164
          43.4176C109.847 43.0826 109.461 42.915 109.007 42.915C108.521 42.915 108.121 43.0933 107.805
          43.4473C107.488 43.7986 107.332 44.2796 107.337 44.8876H110.661V44.8876ZM116.814
          49.8108H114.59V41.4045H116.654V42.5988C117.008 42.0341 117.327 41.6612 117.608 41.4829C117.892
          41.3045 118.211 41.2127 118.57 41.2127C119.078 41.2127 119.564 41.3532 120.034 41.6342L119.345
          43.5716C118.973 43.3311 118.624 43.2095 118.302 43.2095C117.989 43.2095 117.727 43.2933 117.511
          43.4662C117.292 43.6364 117.124 43.9472 117 44.3958C116.876 44.8443 116.814 45.7846 116.814
          47.2141V49.8108V49.8108Z" fill="#C71585" />
      </svg>

    </div>
  );
}

export default Logo;
