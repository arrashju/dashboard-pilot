import PropTypes from "prop-types";

const TikTok = ({ color = "none" }) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 0C7.61261 0 0 7.61261 0 17C0 26.3874 7.61261 34 17 34C26.3874 34 34 26.3874 34 17C34 7.61261 26.3874 0 17 0ZM25.5286 13.0072V15.309C24.4431 15.3094 23.3885 15.0967 22.3939 14.6771C21.7544 14.4071 21.1585 14.0592 20.6135 13.6388L20.6298 20.7239C20.623 22.3193 19.9918 23.8183 18.8494 24.9474C17.9197 25.8664 16.7417 26.4509 15.4648 26.6401C15.1648 26.6845 14.8595 26.7073 14.5507 26.7073C13.1838 26.7073 11.8862 26.2645 10.8247 25.4475C10.6249 25.2937 10.4339 25.127 10.252 24.9474C9.01392 23.7237 8.37549 22.0653 8.483 20.3206C8.56501 18.9925 9.09673 17.726 9.98312 16.7332C11.1559 15.4196 12.7965 14.6905 14.5507 14.6905C14.8595 14.6905 15.1648 14.7136 15.4648 14.7581V15.6091V17.9766C15.1803 17.8828 14.8765 17.8312 14.5602 17.8312C12.9575 17.8312 11.6609 19.1387 11.6849 20.7426C11.7001 21.7688 12.2607 22.6658 13.0874 23.1602C13.476 23.3927 13.9229 23.5366 14.3999 23.5628C14.7737 23.5833 15.1325 23.5313 15.4648 23.4216C16.6099 23.0433 17.4359 21.9678 17.4359 20.6993L17.4397 15.9548V7.29273H20.6096C20.6127 7.60684 20.6446 7.9133 20.7038 8.21027C20.9431 9.41229 21.6206 10.4551 22.5636 11.1661C23.3858 11.7862 24.4097 12.1539 25.5194 12.1539C25.5201 12.1539 25.5293 12.1539 25.5285 12.1531V13.0072H25.5286Z"
        fill={color}
      />
    </svg>
  );
};

TikTok.propTypes = {
  color: PropTypes.string,
};

TikTok.defaultProps = {
  color: "none",
};

export default TikTok;
