import React from 'react';
import { Group } from '@vx/group';
import { Tree } from '@vx/hierarchy';
import { LinkVertical } from '@vx/shape';
import { hierarchy } from 'd3-hierarchy';
import { LinearGradient } from '@vx/gradient';
import { ScaleSVG } from '@vx/responsive';
import { Text } from '@vx/text';

const peach = '#fd9b93';
const pink = '#fe6e9e';
const blue = '#03c0dc';
const green = '#26deb0';
const plum = '#71248e';
const lightpurple = '#374469';
const white = '#ffffff';
const bg = '#272b4d';

const cursorStyle = node => ({
  cursor: node.data.clickKeywords ? 'pointer' : 'auto'
});

function Node({ node }) {
  const width = 75;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;
  const isRoot = node.depth === 0;
  const isParent = !!node.children;

  if (isRoot) return <RootNode node={node} />;
  if (isParent) return <ParentNode node={node} />;

  return (
    <Group top={node.y} left={node.x} style={cursorStyle(node)}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        fill={bg}
        stroke={green}
        strokeWidth={1}
        strokeDasharray={'2,2'}
        strokeOpacity={0.6}
        rx={10}
        onClick={() => {
          googleSearch(node.data.clickKeywords);
        }}
      />
      <text
        dy={'.33em'}
        fontSize={9}
        fontFamily="Arial"
        textAnchor={'middle'}
        fill={green}
        style={{ pointerEvents: 'none' }}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

function RootNode({ node }) {
  return (
    <Group top={node.y} left={node.x}>
      <circle r={24} fill="url('#lg')" />
      <Text
        dy={'.33em'}
        width={20}
        fontSize={7}
        fontFamily="Arial"
        verticalAnchor="middle"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}
        fill={plum}
      >
        {node.data.name}
      </Text>

      {/* <circle r={22} fill="url('#lg')" />
      <text
        dy={'.33em'}
        fontSize={9}
        fontFamily="Arial"
        textAnchor={'middle'}
        style={{ pointerEvents: 'none' }}
        fill={plum}
      >
        {node.data.name}
      </text> */}
    </Group>
  );
}

function ParentNode({ node }) {
  const width = 70;
  const height = 20;
  const centerX = -width / 2;
  const centerY = -height / 2;

  return (
    <Group top={node.y} left={node.x} style={cursorStyle(node)}>
      <rect
        height={height}
        width={width}
        y={centerY}
        x={centerX}
        fill={bg}
        stroke={blue}
        strokeWidth={1}
        onClick={() => {
          googleSearch(node.data.clickKeywords);
        }}
      />
      <text
        dy={'.33em'}
        fontSize={9}
        fontFamily="Arial"
        textAnchor={'middle'}
        style={{ pointerEvents: 'none' }}
        fill={white}
      >
        {node.data.name}
      </text>
    </Group>
  );
}

function googleSearch(keywords) {
  if (!keywords) return;
  window.open(`http://www.google.com/search?q=${keywords}`);
}

export default ({
  treeData,
  width,
  height,
  margin = {
    top: 30,
    left: 30,
    right: 40,
    bottom: 80
  }
}) => {
  const yMax = height - margin.top - margin.bottom;
  const data = hierarchy(treeData);
  const xMax = width - margin.left - margin.right;

  return (
    <ScaleSVG width={width} height={height}>
      <svg>
        <LinearGradient id="lg" from={peach} to={pink} />
        <rect width={width} height={height} rx={14} fill={bg} />
        <Tree root={data} size={[xMax, yMax]}>
          {tree => {
            return (
              <Group top={margin.top} left={margin.left}>
                {tree.links().map((link, i) => {
                  return (
                    <LinkVertical
                      key={`link-${i}`}
                      data={link}
                      stroke={lightpurple}
                      strokeWidth="1"
                      fill="none"
                    />
                  );
                })}
                {tree.descendants().map((node, i) => {
                  return <Node key={`node-${i}`} node={node} />;
                })}
              </Group>
            );
          }}
        </Tree>
      </svg>
    </ScaleSVG>
  );
};
