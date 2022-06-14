import {Name} from '../types/Test.types'
type Props = {
  fullName: Name;
  parentNames: Name[];
};

const Test3 = ({ fullName, parentNames }: Props) => {
  return (
    <div>
      <h3>
        My full name is {fullName.firstname} {fullName.lastname}
      </h3>
      <h3>My parent's names are:</h3>
      {parentNames.map((n) => (
        <p key={n.firstname}>
          {n.firstname} {n.lastname}
        </p>
      ))}
    </div>
  );
};

export default Test3;
