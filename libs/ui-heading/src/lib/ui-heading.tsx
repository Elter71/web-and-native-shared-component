/* eslint-disable-next-line */
import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

export interface UiHeadingProps {
  subtitle: string;
  title: string;
}

export function UiHeading({ title, subtitle }: UiHeadingProps) {
  return (
    <>
      <Text style={styles.textLg}>{title}</Text>
      <Text style={[styles.textXL, styles.appTitleText]} testID="heading">
        {subtitle}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
  textLg: {
    fontSize: 24,
  },
  textXL: {
    fontSize: 48,
  },
});

export default UiHeading;
