import React from 'react';
import Link from './link';

export default React.createClass({
  render: function() {
    return(<div>
      <Link destination={"/"}        name={"Home"} />
      <Link destination={"/posts"}   name={"Posts"} />
      <Link destination={"/about"}   name={"About"} />
      <Link destination={"/contact"} name={"Contact"} />
    </div>)
  }
})
