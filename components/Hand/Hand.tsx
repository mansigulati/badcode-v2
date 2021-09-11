import styles from './Hand.module.css';

function HandWave() {
  return (
    <svg
      width="60px"
      height="60px"
      viewBox="0 0 31 31"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.hand}
    >
      <path
        d="M11.1333629,19.7141217 C11.1496987,19.6977859 11.5550326,20.0796466 11.9368933,19.6977859 C12.3187539,19.3159253 11.9203748,18.9271098 11.9203748,18.9271098 L6.31416762,13.2878656 C5.86929243,12.8429904 5.86530872,12.1256889 6.31218026,11.6788174 C6.75595786,11.2350398 7.48192849,11.2415048 7.92122849,11.6808048 L13.5439542,17.3035304 C13.5485402,17.2989443 13.9716949,17.6648522 14.3376027,17.2989443 C14.7035106,16.9330365 14.3376027,16.5098818 14.3376027,16.5098818 L7.11769806,9.27021347 C6.67282286,8.82533827 6.66883915,8.10803678 7.11571069,7.66116524 C7.55948829,7.21738763 8.28545892,7.2238526 8.72475892,7.6631526 L15.9545455,14.8929391 C15.9560025,14.8914821 16.4138908,15.2249092 16.7899869,14.8914821 C17.0359154,14.6734547 16.9602195,14.3839653 16.8783636,14.2096965 L11.1296647,8.46099747 C10.6879295,8.01926233 10.6864913,7.30450634 11.1333629,6.8576348 C11.5771405,6.4138572 12.3030335,6.42024458 12.7367255,6.85393661 L19.1723654,13.2895765 C19.1918296,13.3090407 19.210439,13.329035 19.2281928,13.3495132 L20.1715868,14.2929071 C20.3380632,14.4555926 21.5676944,15.569978 22.9748807,14.2929071 C23.0186547,14.2544681 23.0625575,14.2199912 23.1065341,14.1892587 C22.3725451,11.4137953 21.6985468,8.83580034 21.6985468,8.83580034 C21.5423751,8.23951977 21.9249335,7.61970971 22.5391399,7.45513362 L23.6110589,7.16791377 L26.5301114,18.061966 C26.5394238,18.088208 26.5468614,18.1156497 26.5521844,18.1443436 C26.925733,20.1579759 26.4196041,22.2653646 25.3678385,23.5830078 C24.316073,24.900651 23.4519694,25.4711252 23.4519694,25.4711252 C20.7711861,27.7941016 16.4710759,27.7181205 13.86287,25.315662 L9.67160438,21.4550229 C9.61790948,21.4088616 9.56929696,21.3641776 9.52630199,21.3211826 L5.5138693,17.3087499 C5.06720906,16.8620897 5.06177828,16.1433411 5.50864982,15.6964696 C5.95242743,15.252692 6.67839805,15.2591569 7.11769806,15.6984569 L11.1333629,19.7141217 Z"
        className={styles.handWave}
      ></path>
      <path
        d="M27.5,9 C27.5,9.27614237 27.2761424,9.5 27,9.5 C26.7238576,9.5 26.5,9.27614237 26.5,9 C26.5,6.51471863 24.4852814,4.5 22,4.5 C21.7238576,4.5 21.5,4.27614237 21.5,4 C21.5,3.72385763 21.7238576,3.5 22,3.5 C25.0375661,3.5 27.5,5.96243388 27.5,9 Z M30.5,9 C30.5,9.27614237 30.2761424,9.5 30,9.5 C29.7238576,9.5 29.5,9.27614237 29.5,9 C29.5,4.85786438 26.1421356,1.5 22,1.5 C21.7238576,1.5 21.5,1.27614237 21.5,1 C21.5,0.723857625 21.7238576,0.5 22,0.5 C26.6944204,0.5 30.5,4.30557963 30.5,9 Z M3.5,22 C3.5,21.7238576 3.72385763,21.5 4,21.5 C4.27614237,21.5 4.5,21.7238576 4.5,22 C4.5,24.4852814 6.51471863,26.5 9,26.5 C9.27614237,26.5 9.5,26.7238576 9.5,27 C9.5,27.2761424 9.27614237,27.5 9,27.5 C5.96243388,27.5 3.5,25.0375661 3.5,22 Z M0.5,22 C0.5,21.7238576 0.723857625,21.5 1,21.5 C1.27614237,21.5 1.5,21.7238576 1.5,22 C1.5,26.1421356 4.85786438,29.5 9,29.5 C9.27614237,29.5 9.5,29.7238576 9.5,30 C9.5,30.2761424 9.27614237,30.5 9,30.5 C4.30557963,30.5 0.5,26.6944204 0.5,22 Z"
        className={styles.handWiggles}
      ></path>
    </svg>
  );
}

export default HandWave;
