"use client";
// components/Tree.js
import TreeNode from './TreeNode';
import { useState } from 'react';

const Tree = () => {
  const [rootValue, setRootValue] = useState(0);

  const updateRootValue = (change) => {
    setRootValue(rootValue + change);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <TreeNode value={rootValue} level={1} updateParentValue={updateRootValue} />
      <div className="flex space-x-16">
        <TreeNode value={2} level={2} updateParentValue={updateRootValue} />
        <TreeNode value={3} level={2} updateParentValue={updateRootValue} />
      </div>
      <div className="flex space-x-8">
        <TreeNode value={4} level={3} updateParentValue={updateRootValue} />
        <TreeNode value={5} level={3} updateParentValue={updateRootValue} />
        <TreeNode value={6} level={3} updateParentValue={updateRootValue} />
        <TreeNode value={7} level={3} updateParentValue={updateRootValue} />
      </div>
    </div>
  );
};

export default Tree;
