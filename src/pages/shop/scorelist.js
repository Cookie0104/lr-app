import Score from "./score";

const ScoreList = ({scores}) => (
    <div>
        {scores.map((score) => {
            return <Score score={score} />;
        })}
    </div>
);

export default ScoreList;