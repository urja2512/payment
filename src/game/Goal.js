import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

function Goal(props) {
    const isGoal = props.isGoal;

    // if (isGoal) {
    //   return <MadeGoal/>;
    // }
    // return <MissedGoal/>;
    const goal = (
        <div id="testId">
            <h1>Goal</h1>
        </div>

    );
    const noGoal = (
        <div id="testId">
            <h1>No Goal </h1>
        </div>

    );

    //return isGoal ? <MadeGoal /> : <MissedGoal />;
    return isGoal ?  goal : noGoal;
}
export default Goal;