import style from "./progressBar.module.scss";

interface Props {
  completed: number;
}
const ProgressBar = (props: Props) => {
  const { completed } = props;

  return (
    <div className={style.containerStyles}>
      <div className={style.fillerStyles} style={{ width: `${completed}%` }}>
        <span className={style.labelStyles}>{`${completed}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
