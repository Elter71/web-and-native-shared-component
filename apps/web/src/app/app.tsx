/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { UiHeading } from '@wansc/ui-heading';

import Checkmark from './icons/checkmark.svg';
import Book from './icons/book.svg';
import ChevronRight from './icons/chevron-right.svg';
import Blog from './icons/blog.svg';
import Courses from './icons/courses.svg';
import YouTube from './icons/youtube.svg';
import Pointer from './icons/pointer.svg';
import VSCode from './icons/vscode.svg';
import NxCloud from './icons/nx-cloud.svg';
import GitHub from './icons/github.svg';
import Terminal from './icons/terminal.svg';
import Heart from './icons/heart.svg';

const openURLInBrowser = (url: string) => {};

const App = () => {
  const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);
  const screenHeight = Dimensions.get('window').height;
  return (
    <View style={{ height: screenHeight }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        ref={(ref) => {
          scrollViewRef.current = ref;
        }}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View style={styles.section}>
          <UiHeading title="Welcome App 👋" subtitle="Hello there," />
        </View>
        <View style={styles.section}>
          <View style={styles.hero}>
            <View style={styles.heroTitle}>
              <Text style={[styles.textLg, styles.heroTitleText]}>
                You're up and running
              </Text>
            </View>
            <TouchableOpacity
              style={styles.whatsNextButton}
              onPress={() => {
                scrollViewRef.current?.scrollTo({
                  x: 0,
                  y: whatsNextYCoord,
                });
              }}
            >
              <Text style={[styles.textMd, styles.textCenter]}>
                What's next?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <View style={[styles.shadowBox]}>
            <Text style={[styles.marginBottomMd, styles.textLg]}>
              Learning materials
            </Text>
            <TouchableOpacity
              style={[styles.listItem, styles.learning]}
              onPress={() => {}}
            >
              <View style={styles.listItemTextContainer}>
                <Text style={[styles.textMd]}>Documentation</Text>
                <Text style={[styles.text2XS, styles.textSubtle]}>
                  Everything is in there
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.listItem, styles.learning]}
              onPress={() =>
                openURLInBrowser('https://blog.nrwl.io/?utm_source=nx-project')
              }
            >
              <View style={styles.listItemTextContainer}>
                <Text style={[styles.textMd]}>Blog</Text>
                <Text style={[styles.text2XS, styles.textSubtle]}>
                  Changelog, features & events
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.listItem, styles.learning]}
              onPress={() =>
                openURLInBrowser(
                  'https://www.youtube.com/c/Nrwl_io/videos?utm_source=nx-project'
                )
              }
            >
              <View style={styles.listItemTextContainer}>
                <Text style={[styles.textMd]}>Youtube channel</Text>
                <Text style={[styles.text2XS, styles.textSubtle]}>
                  Nx Show, talks & tutorials
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.listItem, styles.learning]}
              onPress={() =>
                openURLInBrowser(
                  'https://nx.dev/tutorial/01-create-application?utm_source=nx-project'
                )
              }
            >
              <View style={styles.listItemTextContainer}>
                <Text style={[styles.textMd]}>Interactive tutorials</Text>
                <Text style={[styles.text2XS, styles.textSubtle]}>
                  Create an app, step by step
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.listItem, styles.learning]}
              onPress={() =>
                openURLInBrowser(
                  'https://nxplaybook.com/?utm_source=nx-project'
                )
              }
            >
              <View style={styles.listItemTextContainer}>
                <Text style={[styles.textMd]}>Video courses</Text>
                <Text style={[styles.text2XS, styles.textSubtle]}>
                  Nx custom courses
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <TouchableOpacity
            onPress={() =>
              openURLInBrowser(
                'https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console&utm_source=nx-project'
              )
            }
          >
            <View style={[styles.listItem, styles.shadowBox]}>
              <View style={styles.listItemTextContainer}>
                <Text
                  style={[
                    styles.textMd,
                    styles.textBold,
                    styles.marginBottomSm,
                  ]}
                >
                  Install Nx Console
                </Text>
                <Text style={[styles.textXS, styles.textLight]}>
                  Plugin for VSCode
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <TouchableOpacity
            onPress={() =>
              openURLInBrowser('https://nx.app/?utm_source=nx-project')
            }
          >
            <View style={styles.shadowBox}>
              <View style={[styles.listItem, styles.marginBottomMd]}>
                <View style={styles.listItemTextContainer}>
                  <Text
                    style={[
                      styles.textMd,
                      styles.textBold,
                      styles.marginBottomSm,
                    ]}
                  >
                    Nx Cloud
                  </Text>
                  <Text style={[styles.textXS, styles.textLight]}>
                    Enable faster CI & better DX
                  </Text>
                </View>
              </View>
              <View style={styles.codeBlock}>
                <Text style={[styles.monospace]}>nx connect-to-nx-cloud</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <TouchableOpacity
            onPress={() =>
              openURLInBrowser('https://nx.app/?utm_source=nx-project')
            }
          >
            <View style={[styles.listItem, styles.shadowBox]}>
              <View style={styles.listItemTextContainer}>
                <Text
                  style={[
                    styles.textMd,
                    styles.textBold,
                    styles.marginBottomSm,
                  ]}
                >
                  Nx is open source
                </Text>
                <Text style={[styles.textXS, styles.textLight]}>
                  Love Nx? Give us a star!
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={styles.section}
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            setWhatsNextYCoord(layout.y);
          }}
        >
          <View style={styles.shadowBox}>
            <Text style={[styles.textLg, styles.marginBottomMd]}>
              Next steps
            </Text>
            <Text
              style={[styles.textSm, styles.textLight, styles.marginBottomMd]}
            >
              Here are some things you can do with Nx:
            </Text>
            <View style={styles.listItem}>
              <View style={styles.listItemTextContainer}>
                <Text style={styles.textSm}>Add UI library</Text>
              </View>
            </View>
            <View style={[styles.codeBlock, styles.marginBottomLg]}>
              <Text style={[styles.textXS, styles.monospace, styles.comment]}>
                # Generate UI lib
              </Text>
              <Text
                style={[styles.textXS, styles.monospace, styles.marginBottomMd]}
              >
                nx g @nrwl/react-native:lib ui
              </Text>
              <Text style={[styles.textXS, styles.monospace, styles.comment]}>
                # Add a component
              </Text>
              <Text style={[styles.textXS, styles.monospace]}>nx g \</Text>
              <Text style={[styles.textXS, styles.monospace]}>
                @nrwl/react-native:component \
              </Text>
              <Text style={[styles.textXS, styles.monospace]}>
                button --project ui
              </Text>
            </View>
            <View style={styles.listItem}>
              <View style={styles.listItemTextContainer}>
                <Text style={styles.textSm}>
                  View interactive dependency graph
                </Text>
              </View>
            </View>
            <View style={[styles.codeBlock, styles.marginBottomLg]}>
              <Text style={[styles.textXS, styles.monospace]}>
                nx dep-graph
              </Text>
            </View>
            <View style={styles.listItem}>
              <View style={styles.listItemTextContainer}>
                <Text style={styles.textSm}>Run affected commands</Text>
              </View>
            </View>
            <View style={styles.codeBlock}>
              <Text style={[styles.textXS, styles.monospace, styles.comment]}>
                # See what's affected by changes
              </Text>
              <Text
                style={[styles.textXS, styles.monospace, styles.marginBottomMd]}
              >
                nx affected:dep-graph
              </Text>
              <Text style={[styles.textXS, styles.monospace, styles.comment]}>
                # run tests for current changes
              </Text>
              <Text
                style={[styles.textXS, styles.monospace, styles.marginBottomMd]}
              >
                nx affected:text
              </Text>
              <Text style={[styles.textXS, styles.monospace, styles.comment]}>
                # run e2e tests for current
              </Text>
              <Text style={[styles.textXS, styles.monospace, styles.comment]}>
                # changes
              </Text>
              <Text style={[styles.textXS, styles.monospace]}>
                nx affected:e2e
              </Text>
            </View>
          </View>
          <View style={[styles.listItem, styles.love]}>
            <Text style={styles.textSubtle}>Carefully crafted with </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  codeBlock: {
    backgroundColor: 'rgba(55, 65, 81, 1)',
    marginVertical: 12,
    padding: 12,
    borderRadius: 4,
  },
  monospace: {
    color: '#ffffff',
    fontFamily: 'Courier',
    marginVertical: 4,
  },
  comment: {
    color: '#cccccc',
  },
  marginBottomSm: {
    marginBottom: 6,
  },
  marginBottomMd: {
    marginBottom: 18,
  },
  marginBottomLg: {
    marginBottom: 24,
  },
  textLight: {
    fontWeight: '300',
  },
  textBold: {
    fontWeight: '500',
  },
  textCenter: {
    textAlign: 'center',
  },
  text2XS: {
    fontSize: 12,
  },
  textXS: {
    fontSize: 14,
  },
  textSm: {
    fontSize: 16,
  },
  textMd: {
    fontSize: 18,
  },
  textLg: {
    fontSize: 24,
  },
  textXL: {
    fontSize: 48,
  },
  textContainer: {
    marginVertical: 12,
  },
  textSubtle: {
    color: '#6b7280',
  },
  section: {
    marginVertical: 24,
    marginHorizontal: 12,
  },
  shadowBox: {
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
  hero: {
    borderRadius: 12,
    backgroundColor: '#143055',
    padding: 36,
    marginBottom: 24,
  },
  heroTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  heroTitleText: {
    color: '#ffffff',
    marginLeft: 12,
  },
  heroText: {
    color: '#ffffff',
    marginVertical: 12,
  },
  whatsNextButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 8,
    width: '50%',
    marginTop: 24,
  },
  learning: {
    marginVertical: 12,
  },
  love: {
    marginTop: 12,
    justifyContent: 'center',
  },
});

export default App;
