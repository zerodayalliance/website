import packageInfo from "../../../package.json";

function decor() {
  const str = "ZeroDay Alliance SNU";

  console.log(
    `%c${str} \n\n%cv${packageInfo.version}`,
    "color: #0ae169",
    "color: #e6dc82"
  );
}

export default decor;
