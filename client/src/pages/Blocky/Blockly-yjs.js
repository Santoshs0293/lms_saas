
import React, { useEffect, useRef } from 'react';
import { workspace, createBlocklyBlock } from './Blocky.jsx';

function BlocklyYjs() {
  const blocklyDivRef = useRef(null);

  useEffect(() => {
    if (blocklyDivRef.current) {
      workspace.render(blocklyDivRef.current);
    }
  }, []);

  // Example CRUD operations
  const handleCreateBlock = () => {
    createBlocklyBlock('custom-block-id', 'controls_if', 50, 50);
  };

  const handleReadBlocks = () => {
    const blocks = workspace.getAllBlocks(false);
    console.log(blocks);
  };

  const handleUpdateBlockPosition = (blockId, x, y) => {
    const block = workspace.getBlockById(blockId);
    if (block) {
      block.moveBy(x - block.getRelativeToSurfaceXY().x, y - block.getRelativeToSurfaceXY().y);
    }
  };

  const handleDeleteBlock = (blockId) => {
    const block = workspace.getBlockById(blockId);
    if (block) {
      block.dispose();
    }
  };

  return (
    <div>
      <div ref={blocklyDivRef} id="blocklyDiv" style={{ height: '480px', width: '600px' }}></div>
      <button onClick={handleCreateBlock}>Create Block</button>
      <button onClick={handleReadBlocks}>Read Blocks</button>
      <button onClick={() => handleUpdateBlockPosition('custom-block-id', 100, 100)}>Update Block Position</button>
      <button onClick={() => handleDeleteBlock('custom-block-id')}>Delete Block</button>
    </div>
  );
}

export default BlocklyYjs;
