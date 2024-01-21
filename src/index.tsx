import React from "react";

const styles: {[key: string]: React.CSSProperties} = {
  redClass: {
    color: 'red'
  },
  blueClass: {
    color: 'blue'
  }
}

const SandboxElement = () => {
  return (
    <div>
      <span style={styles.redClass}>Hello from sandbox!</span>
    </div>
  );
};

export default SandboxElement;