// import { View, Text, ScrollView, Image, TouchableOpacity, Pressable, } from 'react-native'
// import Animated, { Easing, useSharedValue, withSpring } from 'react-native-reanimated'
// import React, { useEffect, useRef } from 'react'
// import { componentStyle, NGHIACOLOR } from '@/assets/componentStyleSheet'
// import styles, { vw } from '@/assets/stylesheet'
// import { avatarComponet, convertNumberToTime, marginBottomForScrollView } from '@/assets/component'
// import * as ICON from '@/assets/svgXml'
// import * as  CLASS from '@/assets/Class'
// import * as CTEXT from '@/assets/CustomText'
// import { DefaultTheme, useNavigation } from '@react-navigation/native'
// import { MatchHistoryFormat } from '@/data/interfaceFormat'
// import { getStorageList } from '@/data/storageFunc'
// import { RootContext } from '@/data/store'
// import { lvlData } from '@/data/factoryData'

// import { useState } from 'react';
// import { PanResponder } from 'react-native';

// export default function Game() {
//   const navigation = useNavigation()
//   const [CurrentCache, dispatch] = React.useContext(RootContext)
//   const [multiMode, setMultiMode] = React.useState<0 | 1>(CurrentCache.multiMode)

//   const [totalTime, setTotalTime] = React.useState<number>(0)
//   const [totalTimeUser2, setTotalTimeUser2] = React.useState<number>(0)
//   const [round, setRound] = React.useState<number>(0)
//   const [roundUser2, setRoundUser2] = React.useState<number>(0)
//   const [step, setStep] = React.useState<number>(0)
//   const [match, setMatch] = React.useState<MatchHistoryFormat>()


//   const [inspectTime, setInspectTime] = React.useState<number>(lvlData[CurrentCache.currentGameLvl][3] as number)
//   const [displayTime, setDisplayTime] = React.useState<number>(0)

//   const FOM = `F, D, U, R, L, B, F’, D’, U’, R’, L’, B’, F2, D2, U2, R2, L2, B2`

//   // STOPWATCH FUNCTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
//   const [isRunning, setIsRunning] = useState(false);
//   const [lastTime, setLastTime] = useState(0);

//   /**
//    * Updates the display time whenever the component is running
//    * by adding the difference between the current time and the last time
//    * to the display time.
//    */
//   useEffect(() => {
//     let intervalId: any;
//     if (isRunning) {
//       intervalId = requestAnimationFrame(() => {
//         const now = performance.now();
//         setDisplayTime(prevTime => prevTime + now - lastTime);
//         setLastTime(now);
//         console.log(displayTime);
//       });
//     }

//     // Cancel the previous animation frame when the component is unmounted
//     // or the isRunning state changes.
//     return () => cancelAnimationFrame(intervalId);
//   }, [isRunning, lastTime]);

//   /**
//    * Updates the last time whenever the component is mounted or
//    * the isRunning state changes.
//    */
//   useEffect(() => {
//     setLastTime(performance.now());
//   }, []);

//   /**
//    * Toggles the isRunning state and updates the last time
//    * when the start/stop button is pressed.
//    */
//   const handleStartStop = () => {
//     if (!isRunning) {
//       setLastTime(performance.now()); // Update lastTime only when starting
//     }
//     setIsRunning(!isRunning);
//   };

//   /**
//    * Resets the display time and stops the component when the
//    * reset button is pressed.
//    */
//   const handleReset = () => {
//     setDisplayTime(0);
//     setIsRunning(false);
//   };

//   // END OF STOPWATCH FUNCTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//   let counterTimeoutId: number | null = null;
//   function counter(second: number) {
//     if (second > 0) {
//       counterTimeoutId = window.setTimeout(() => {
//         setDisplayTime(second - 1);
//         counter(second - 1);
//       }, 1000);

//     } else {
//       console.log('counter end');
//       setStep(2);
//       counterTimeoutId = null;
//     }
//   }

//   function endCounter() {
//     if (counterTimeoutId) {
//       clearTimeout(counterTimeoutId);
//       counterTimeoutId = null;
//     }
//     setDisplayTime(0);
//     setInspectTime(0);
//   }

//   // OPACITY ANIMATOR >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//   /**
//    * A shared value that controls the opacity of the TimerBox component.
//    */
//   const opacityAnimate = useSharedValue(0);
//   /**
//    * A shared value that controls the extra padding of the TimerBox component.
//    */
//   const timerExtraPaddingAnimate = useSharedValue(0);

//   /**
//    * Animates the opacity of the TimerBox component to a given value.
//    * @param toValue The value to animate to.
//    */
//   const handleOpacityAnimation = (toValue: number) => {
//     opacityAnimate.value = withSpring(toValue);
//   }

//   /**
//    * Animates the extra padding of the TimerBox component to a given value.
//    * @param toValue The value to animate to.
//    */
//   const handleTimerExtraPadding = (toValue: number) => {
//     timerExtraPaddingAnimate.value = withSpring(toValue);
//   }

//   /**
//    * A reference to the interval that controls the opacity animator blinker.
//    */
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   /**
//    * A function that starts the opacity animator blinker.
//    * The blinker will alternate between opacity 0 and 1 every second.
//    */
//   const opacityAnimatorBlinker = () => {
//     let i = false
//     handleOpacityAnimation(i ? 1 : 0);
//     intervalRef.current = setInterval(() => {
//       i = !i
//       handleOpacityAnimation(i ? 1 : 0);
//     }, 1000);
//   };

//   /**
//    * A function that stops the opacity animator blinker.
//    * The blinker will reset to opacity 0 and the interval will be cleared.
//    */
//   const stopOpacityAnimatorBlinker = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//       handleOpacityAnimation(0);
//     }
//   };
//   // END OF OPACITY ANIMATOR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//   /**
//    * TimerBox component.
//    * @param {number} round The round number.
//    * @param {string} header The header text.
//    * @param {string} bottom The bottom text.
//    * @param {number} time The time in seconds.
//    * @param {string} formular The formular text.
//    * @returns {JSX.Element} TimerBox component.
//    */
//   const TimerBox = React.memo(({ round, header, bottom, time, formular }: { round: number, header: string, bottom?: string, time?: number, formular?: string }) => {
//     const roundNum = React.useMemo(() => CurrentCache.currentGameLvl === 2 ? 12 : 5, [CurrentCache.currentGameLvl]);
//     const roundTime = React.useMemo(() => Array(roundNum).fill(0), [roundNum]);

//     return (
//       <TouchableOpacity
//         disabled={step == 0}
//         onPressIn={stepFncControl}
//         onPressOut={() => {
//           console.log('press out');
//           step == 2 ? stepFncControl() : null
//         }}
//       >
//         <CLASS.ViewColCenter style={[styles.marginTop4vw, styles.positionRelative, styles.overflowHidden, { backgroundColor: NGHIACOLOR.NghiaTransparentDark30, borderColor: step == 3 ? 'red' : NGHIACOLOR.NghiaBrand800, borderRadius: vw(3), borderWidth: step == 3 ? 3 : 1 }]}>
//           <Animated.View style={[styles.flex1, styles.w100, styles.h100, styles.positionAbsolute, { opacity: opacityAnimate }]} >
//             <CLASS.ViewGra800700 style={[styles.w100, styles.h100,]} />
//           </Animated.View>
//           <CLASS.ViewColCenter style={[styles.paddingH4vw, styles.paddingV6vw, styles.gap6vw,]}>
//             <CTEXT.NGT_Inter_DispLg_SemiBold color={NGHIACOLOR.NghiaBrand300}>{header}</CTEXT.NGT_Inter_DispLg_SemiBold>
//             {formular ?
//               <View style={[styles.borderRadius2vw, styles.paddingH4vw, styles.paddingV2vw, styles.justifyContentCenter, { backgroundColor: NGHIACOLOR.NghiaTransparentWhite10 }]}>
//                 <CTEXT.NGT_Inter_BodyLg_Reg style={[styles.textCenter]}>{formular}</CTEXT.NGT_Inter_BodyLg_Reg>
//               </View> :
//               <View style={[styles.paddingV3vw, styles.paddingH6vw, styles.borderRadius100, { backgroundColor: NGHIACOLOR.NghiaTransparentWhite30 }]}>
//                 <CTEXT.NGT_Inter_DispLg_SemiBold color={NGHIACOLOR.NghiaBrand300}>{step == 1 ? time + `"` : convertNumberToTime(time || 0)}</CTEXT.NGT_Inter_DispLg_SemiBold>
//               </View>
//             }
//             {
//               bottom ? <CTEXT.NGT_Inter_BodyLg_Reg color={NGHIACOLOR.NghiaBrand500} style={[styles.textCenter, styles.paddingH4vw]}>{bottom}</CTEXT.NGT_Inter_BodyLg_Reg> :
//                 <TouchableOpacity onPress={() => { stepFncControl() }} >
//                   <CLASS.ViewGra800700 style={[styles.justifyContentCenter, styles.borderRadius2vw, styles.paddingV3vw, styles.paddingH8vw, {}]}>
//                     <CTEXT.NGT_Inter_HeaderLg_Med>Sẵn sàng</CTEXT.NGT_Inter_HeaderLg_Med>
//                   </CLASS.ViewGra800700>
//                 </TouchableOpacity>
//             }
//           </CLASS.ViewColCenter>
//           <Animated.View style={{ height: timerExtraPaddingAnimate }} />
//         </CLASS.ViewColCenter>
//       </TouchableOpacity>
//     )
//   })

//   /**
//  * RoundResult component to display the results of a round.
//  * @param {number} round - The current round number.
//  * @param {number} time - The time taken or remaining for the round.
//  * @returns {JSX.Element} The rendered component displaying round results.
//  */
//   const RoundResult: React.FC<{ round: number; time: number }> = React.memo(({ round }) => {
//     const roundNum = CurrentCache.currentGameLvl === 2 ? 12 : 5;
//     const roundTime = React.useMemo(() => Array(roundNum).fill(0), [roundNum]);

//     return (
//       <View style={[styles.padding4vw, componentStyle.borderBrand800]}>
//         <CLASS.ViewRow style={[styles.flex1, styles.borderRadius2vw, styles.overflowHidden]}>
//           <CLASS.ViewGra800700 style={[styles.w50, styles.flexRowCenter, styles.paddingV3vw]}>
//             <CTEXT.NGT_Inter_HeaderLg_Med>Kết quả</CTEXT.NGT_Inter_HeaderLg_Med>
//           </CLASS.ViewGra800700>

//           <CLASS.ViewGra800700 style={[styles.w50, styles.flexRowCenter, styles.paddingV3vw, styles.gap1vw]}>
//             <CTEXT.NGT_Inter_BodyLg_Med>Tốt nhất: </CTEXT.NGT_Inter_BodyLg_Med>
//             <View style={[styles.paddingV1vw, styles.paddingH2vw, styles.borderRadius2vw, { backgroundColor: NGHIACOLOR.NghiaTransparentDark30 }]}>
//               <CTEXT.NGT_Inter_BodyLg_Med>{lvlData[CurrentCache.currentGameLvl][2].toString()} {CurrentCache.user.best?.[CurrentCache.currentGameLvl] || null}</CTEXT.NGT_Inter_BodyLg_Med>
//             </View>
//           </CLASS.ViewGra800700>
//         </CLASS.ViewRow>

//         <CLASS.ViewRowBetweenCenter style={[styles.paddingV3vw]}>
//           <CTEXT.NGT_Inter_BodyLg_Reg>Phương pháp <CTEXT.NGT_Inter_BodyLg_SemiBold color={NGHIACOLOR.NghiaBrand300}>{lvlData[CurrentCache.currentGameLvl][2].toString()}</CTEXT.NGT_Inter_BodyLg_SemiBold></CTEXT.NGT_Inter_BodyLg_Reg>
//           <CTEXT.NGT_Inter_BodyMd_Med>{roundNum - round} lượt còn lại</CTEXT.NGT_Inter_BodyMd_Med>
//         </CLASS.ViewRowBetweenCenter>

//         <CLASS.ViewRowBetweenCenter style={[styles.w100, styles.padding2vw, componentStyle.borderBrand800, styles.flexWrap]}>
//           {roundTime.map((item, index) => (
//             <CLASS.ViewColCenter key={index} style={[styles.padding2vw, styles.borderRadius10, styles.gap2vw, styles.w20, { backgroundColor: round == index + 1 ? NGHIACOLOR.NghiaTransparentWhite30 : undefined }]}>
//               <CTEXT.NGT_Inter_BodyLg_Med>{index + 1}</CTEXT.NGT_Inter_BodyLg_Med>
//               <View pointerEvents="none">{roundNum == 12 ? null : ICON.greenClock(vw(8), vw(8))}</View>
//               <CLASS.ViewRowCenter style={[styles.border1white, styles.w100, styles.paddingH1vw, styles.borderRadius2vw, { backgroundColor: index == 1 ? 'white' : index == roundTime.length - 1 ? NGHIACOLOR.NghiaBrand600 : undefined, borderWidth: index == roundTime.length - 1 ? 0 : 1 }]}>
//                 <CTEXT.NGT_Inter_BodyLg_Med color={index == 1 ? NGHIACOLOR.NghiaBrand600 : 'white'}>{item}s</CTEXT.NGT_Inter_BodyLg_Med>
//               </CLASS.ViewRowCenter>
//             </CLASS.ViewColCenter>
//           ))}
//         </CLASS.ViewRowBetweenCenter>
//       </View>
//     );
//   });


//   /**
//    * Game component is responsible for rendering the main game interface.
//    * It handles various game states and interactions, including timing and round progression.
//    *
//    * @component
//    * @returns {JSX.Element} The rendered Game component.
//    * 
//    * Internal Functions:
//    * - stepFncControl: Handles the control flow for different game steps.
//    * - renderTimeBox: Renders the TimerBox component with dynamic content based on the current game step.
//    * 
//    * Uses:
//    * - TimerBox: Sub-component for displaying timer and round information.
//    * - RoundResult: Sub-component for displaying results of each game round.
//    * 
//    * State:
//    * - step: Current step of the game flow.
//    * - round: Current round number.
//    * - displayTime: Time to display in the TimerBox.
//    * - inspectTime: Inspection time for the current round.
//    * 
//    * Dependencies:
//    * - lvlData: Data used for determining round and time settings.
//    * - CurrentCache: Context for accessing game level and user data.
//    */
//   const renderTimeBox = React.useMemo(() => {
//     let headerText = [
//       `Scramble: ${multiMode ? `` : ``} lượt ${round}`,
//       `Quan sát`,
//       `Sẵn sàng`,
//       `Đang đếm thời gian`,
//       `Kết quả lượt ${round}`,
//     ]
//     let bottomText = [
//       ``,
//       `Chạm tay của bạn vào Vùng này khi sẵn sàng`,
//       `Bỏ chạm để bắt đầu đếm giờ`,
//       `Chạm lại vào Vùng này để kết thúc bộ đếm`,
//       `Chạm tay của bạn vào Vùng này khi sẵn sàng với lượt chơi thứ ${round + 1}`,
//     ]

//     return <TimerBox
//       round={round}
//       formular={step === 0 ? FOM : ''}
//       header={headerText[step]}
//       bottom={step === 0 ? '' : bottomText[step]}
//       time={displayTime}
//     />
//   }, [round, step, multiMode, displayTime, FOM])

//   /**
//    * Controls the flow and state transitions of the game steps.
//    * 
//    * This function manages the different stages of the game by switching between steps.
//    * It updates the inspection time, manages round progression, handles animations, 
//    * and executes timing logic based on the current step.
//    * 
//    * Steps:
//    * - 0: Initializes inspection time, increments the round, and starts animations.
//    * - 1: Stops animations and adjusts opacity.
//    * - 2: Starts the timer, resets inspection time, and initiates animations.
//    * - 3: Ends the timer, resets inspection time, stops animations, and clears padding.
//    * - 4: Resets the step to the initial state.
//    * 
//    * Side-effects:
//    * - Calls various functions to adjust animations, timers, and UI elements.
//    * - Updates state variables like `step`, `round`, `inspectTime`, and `displayTime`.
//    */
//   function stepFncControl() {
//     console.log(step);
//     switch (step) {
//       case 0:
//         setInspectTime(lvlData[CurrentCache.currentGameLvl][3] as number);
//         setRound(round + 1); opacityAnimatorBlinker(); handleTimerExtraPadding(vw(20));
//         setDisplayTime(inspectTime);
//         counter(inspectTime);
//         break;
//       case 1:
//         stopOpacityAnimatorBlinker();
//         handleOpacityAnimation(0);
//         endCounter();
//         break;
//       case 2:
//         console.log('start');
//         handleStartStop()
//         setInspectTime(0);
//         opacityAnimatorBlinker();
//         break;
//       case 3:
//         console.log('end' + displayTime);
//         handleStartStop()
//         setInspectTime(0)
//         stopOpacityAnimatorBlinker();
//         handleTimerExtraPadding(0);
//         setTotalTime(displayTime);
//         break;
//       case 4:
//         return setStep(0);
//     }
//     setStep(step + 1);
//   }

//   useEffect(() => {
//     console.log(step);

//   }, [step])


//   const renderItem = React.useMemo(() => {
//     switch (multiMode) {
//       case 1:
//         return (
//           <CLASS.ViewCol style={[styles.h100, styles.paddingH6vw, styles.gap4vw]}>
//             <CLASS.LevelBeing icon={lvlData[CurrentCache.currentGameLvl][0]} title={lvlData[CurrentCache.currentGameLvl][1] as string} med={lvlData[CurrentCache.currentGameLvl][2] as string} time={totalTime} />
//             {renderTimeBox}
//             <RoundResult round={round} time={totalTime} />
//             <RoundResult round={roundUser2} time={totalTimeUser2} />
//           </CLASS.ViewCol>
//         )

//       default:
//         return (
//           <CLASS.ViewCol style={[styles.h100, styles.paddingH6vw, styles.gap4vw]}>
//             <CLASS.LevelBeing icon={lvlData[CurrentCache.currentGameLvl][0]} title={lvlData[CurrentCache.currentGameLvl][1] as string} med={lvlData[CurrentCache.currentGameLvl][2] as string} time={totalTime} />
//             {renderTimeBox}
//             <RoundResult round={round} time={totalTime} />
//           </CLASS.ViewCol>
//         )
//     }
//   }, [multiMode, CurrentCache.currentGameLvl, round, roundUser2, totalTime, totalTimeUser2, renderTimeBox])



//   return (
//     <CLASS.SSBarWithSaveArea trans margin barContentStyle='light-content' bgColor={DefaultTheme.colors.background} barColor={DefaultTheme.colors.background}>
//       <CLASS.ViewRowBetweenCenter style={[styles.paddingH4vw, styles.paddingV2vw]}>
//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           style={[styles.padding2vw]}>
//           {ICON.sharpLeftArrow(vw(6), vw(6), 'white')}
//         </TouchableOpacity>
//         <CTEXT.NGT_Inter_DispMd_SemiBold>Game on</CTEXT.NGT_Inter_DispMd_SemiBold>
//         <TouchableOpacity style={[styles.padding2vw]}>
//           {ICON.tripleline(vw(6), vw(6), 'white')}
//         </TouchableOpacity>
//       </CLASS.ViewRowBetweenCenter>

//       <View style={[styles.flex1]}
//       // {...panResponderRef.current?.panHandlers}
//       >
//         <ScrollView style={[styles.flex1]}
//         >
//           {renderItem}

//           {marginBottomForScrollView()}
//         </ScrollView>
//       </View>
//     </CLASS.SSBarWithSaveArea>
//   )
// }


import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native';
import Animated, { Easing, useSharedValue, withSpring } from 'react-native-reanimated';
import { componentStyle, NGHIACOLOR } from '@/assets/componentStyleSheet';
import styles, { vw } from '@/assets/stylesheet';
import { avatarComponet, convertNumberToTime, marginBottomForScrollView } from '@/assets/component';
import * as ICON from '@/assets/svgXml';
import * as CLASS from '@/assets/Class';
import * as CTEXT from '@/assets/CustomText';
import { DefaultTheme, useNavigation } from '@react-navigation/native';
import { MatchHistoryFormat } from '@/data/interfaceFormat';
import { getStorageList } from '@/data/storageFunc';
import { RootContext } from '@/data/store';
import { lvlData } from '@/data/factoryData';

export default function Game() {
  const navigation = useNavigation();
  const [CurrentCache, dispatch] = React.useContext(RootContext);
  const [multiMode, setMultiMode] = React.useState<0 | 1>(CurrentCache.multiMode);

  const [totalTime, setTotalTime] = React.useState<number>(0);
  const [totalTimeUser2, setTotalTimeUser2] = React.useState<number>(0);
  const [round, setRound] = React.useState<number>(0);
  const [roundUser2, setRoundUser2] = React.useState<number>(0);
  const [step, setStep] = React.useState<number>(0);
  const [match, setMatch] = React.useState<MatchHistoryFormat>();

  const [inspectTime, setInspectTime] = React.useState<number>(lvlData[CurrentCache.currentGameLvl][3] as number);
  const [displayTime, setDisplayTime] = React.useState<number>(0);

  const FOM = `F, D, U, R, L, B, F’, D’, U’, R’, L’, B’, F2, D2, U2, R2, L2, B2`;

  // STOPWATCH FUNCTION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
  const [isRunning, setIsRunning] = useState(false);
  const [lastTime, setLastTime] = useState(0);

  /**
   * Updates the display time whenever the component is running
   * by adding the difference between the current time and the last time
   * to the display time.
   */
  useEffect(() => {
    let intervalId: any;
    if (isRunning) {
      intervalId = requestAnimationFrame(() => {
        const now = performance.now();
        setDisplayTime(prevTime => prevTime + now - lastTime);
        setLastTime(now);
      });
    }

    // Cancel the previous animation frame when the component is unmounted
    // or the isRunning state changes.
    return () => cancelAnimationFrame(intervalId);
  }, [isRunning, lastTime]);

  /**
   * Updates the last time whenever the component is mounted or
   * the isRunning state changes.
   */
  useEffect(() => {
    setLastTime(performance.now());
  }, []);

  /**
   * Toggles the isRunning state and updates the last time
   * when the start/stop button is pressed.
   */
  const handleStartStop = useCallback(() => {
    if (!isRunning) {
      setLastTime(performance.now()); // Update lastTime only when starting
    }
    setIsRunning(!isRunning);
  }, [isRunning]);

  /**
   * Resets the display time and stops the component when the
   * reset button is pressed.
   */
  const handleReset = useCallback(() => {
    setDisplayTime(0);
    setIsRunning(false);
  }, []);

  // END OF STOPWATCH FUNCTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  let counterTimeoutId: number | null = null;

  // Memoize the counter function for improved performance
  const memoizedCounter = useCallback((second: number) => {
    if (second > 0) {
      counterTimeoutId = window.setTimeout(() => {
        setDisplayTime(second - 1);
        memoizedCounter(second - 1); // Use memoized version
      }, 1000);
    } else {
      setStep(2);
      counterTimeoutId = null;
    }
  }, []);
  const endCounter = useCallback(() => {
    if (counterTimeoutId) {
      clearTimeout(counterTimeoutId);
      counterTimeoutId = null;
    }
    setDisplayTime(0);
    setInspectTime(0);
  }, []);

  // OPACITY ANIMATOR >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const opacityAnimate = useSharedValue(0);
  const timerExtraPaddingAnimate = useSharedValue(0);

  const handleOpacityAnimation = useCallback((toValue: number) => {
    opacityAnimate.value = withSpring(toValue);
  }, []);

  const handleTimerExtraPadding = useCallback((toValue: number) => {
    timerExtraPaddingAnimate.value = withSpring(toValue);
  }, []);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const opacityAnimatorBlinker = useCallback(() => {
    let i = false;
    handleOpacityAnimation(i ? 1 : 0);
    intervalRef.current = setInterval(() => {
      i = !i;
      handleOpacityAnimation(i ? 1 : 0);
    }, 1000);
  }, [handleOpacityAnimation]);

  const stopOpacityAnimatorBlinker = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      handleOpacityAnimation(0);
    }
  }, [handleOpacityAnimation]);
  // END OF OPACITY ANIMATOR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  const TimerBox = React.memo(({ round, header, bottom, time, formular }) => {
    const roundNum = useMemo(() => (CurrentCache.currentGameLvl === 2 ? 12 : 5), [CurrentCache.currentGameLvl]);
    const roundTime = useMemo(() => Array(roundNum).fill(0), [roundNum]);

    return (
      <TouchableOpacity
        disabled={step === 0}
        onPressIn={stepFncControl}
        onPressOut={() => {
          if (step === 2) stepFncControl();
        }}
      >
        <CLASS.ViewColCenter style={[styles.marginTop4vw, styles.positionRelative, styles.overflowHidden, { backgroundColor: NGHIACOLOR.NghiaTransparentDark30, borderColor: step === 3 ? 'red' : NGHIACOLOR.NghiaBrand800, borderRadius: vw(3), borderWidth: step === 3 ? 3 : 1 }]}>
          <Animated.View style={[styles.flex1, styles.w100, styles.h100, styles.positionAbsolute, { opacity: opacityAnimate }]} >
            <CLASS.ViewGra800700 style={[styles.w100, styles.h100]} />
          </Animated.View>
          <CLASS.ViewColCenter style={[styles.paddingH4vw, styles.paddingV6vw, styles.gap6vw]}>
            <CTEXT.NGT_Inter_DispLg_SemiBold color={NGHIACOLOR.NghiaBrand300}>{header}</CTEXT.NGT_Inter_DispLg_SemiBold>
            {formular ? (
              <View style={[styles.borderRadius2vw, styles.paddingH4vw, styles.paddingV2vw, styles.justifyContentCenter, { backgroundColor: NGHIACOLOR.NghiaTransparentWhite10 }]}>
                <CTEXT.NGT_Inter_BodyLg_Reg style={[styles.textCenter]}>{formular}</CTEXT.NGT_Inter_BodyLg_Reg>
              </View>
            ) : (
              <View style={[styles.paddingV3vw, styles.paddingH6vw, styles.borderRadius100, { backgroundColor: NGHIACOLOR.NghiaTransparentWhite30 }]}>
                <CTEXT.NGT_Inter_DispLg_SemiBold color={NGHIACOLOR.NghiaBrand300}>{step === 1 ? `${time}"` : convertNumberToTime(time || 0)}</CTEXT.NGT_Inter_DispLg_SemiBold>
              </View>
            )}
            {bottom ? (
              <CTEXT.NGT_Inter_BodyLg_Reg color={NGHIACOLOR.NghiaBrand500} style={[styles.textCenter, styles.paddingH4vw]}>{bottom}</CTEXT.NGT_Inter_BodyLg_Reg>
            ) : (
              <TouchableOpacity onPress={stepFncControl}>
                <CLASS.ViewGra800700 style={[styles.justifyContentCenter, styles.borderRadius2vw, styles.paddingV3vw, styles.paddingH8vw]}>
                  <CTEXT.NGT_Inter_HeaderLg_Med>Sẵn sàng</CTEXT.NGT_Inter_HeaderLg_Med>
                </CLASS.ViewGra800700>
              </TouchableOpacity>
            )}
          </CLASS.ViewColCenter>
          <Animated.View style={{ height: timerExtraPaddingAnimate }} />
        </CLASS.ViewColCenter>

      </TouchableOpacity>
    );
  });

  const RoundResult = React.memo(({ round }) => {
    const roundNum = CurrentCache.currentGameLvl === 2 ? 12 : 5;
    const roundTime = useMemo(() => Array(roundNum).fill(0), [roundNum]);

    return (
      <View style={[styles.padding4vw, componentStyle.borderBrand800]}>
        <CLASS.ViewRow style={[styles.flex1, styles.borderRadius2vw, styles.overflowHidden]}>
          <CLASS.ViewGra800700 style={[styles.w50, styles.flexRowCenter, styles.paddingV3vw]}>
            <CTEXT.NGT_Inter_HeaderLg_Med>Kết quả</CTEXT.NGT_Inter_HeaderLg_Med>
          </CLASS.ViewGra800700>
          <CLASS.ViewGra800700 style={[styles.w50, styles.flexRowCenter, styles.paddingV3vw, styles.gap1vw]}>
            <CTEXT.NGT_Inter_BodyLg_Med>Tốt nhất: </CTEXT.NGT_Inter_BodyLg_Med>
            <View style={[styles.paddingV1vw, styles.paddingH2vw, styles.borderRadius2vw, { backgroundColor: NGHIACOLOR.NghiaTransparentDark30 }]}>
              <CTEXT.NGT_Inter_BodyLg_Med>{lvlData[CurrentCache.currentGameLvl][2].toString()} {CurrentCache.user.best?.[CurrentCache.currentGameLvl] || null}</CTEXT.NGT_Inter_BodyLg_Med>
            </View>
          </CLASS.ViewGra800700>
        </CLASS.ViewRow>
        <CLASS.ViewRowBetweenCenter style={[styles.paddingV3vw]}>
          <CTEXT.NGT_Inter_BodyLg_Reg>Phương pháp <CTEXT.NGT_Inter_BodyLg_SemiBold color={NGHIACOLOR.NghiaBrand300}>{lvlData[CurrentCache.currentGameLvl][2].toString()}</CTEXT.NGT_Inter_BodyLg_SemiBold></CTEXT.NGT_Inter_BodyLg_Reg>
          <CTEXT.NGT_Inter_BodyMd_Med>{roundNum - round} lượt còn lại</CTEXT.NGT_Inter_BodyMd_Med>
        </CLASS.ViewRowBetweenCenter>
        <CLASS.ViewRowBetweenCenter style={[styles.w100, styles.padding2vw, componentStyle.borderBrand800, styles.flexWrap]}>
          {roundTime.map((item, index) => (
            <CLASS.ViewColCenter key={index} style={[styles.padding2vw, styles.borderRadius10, styles.gap2vw, styles.w20, { backgroundColor: round === index + 1 ? NGHIACOLOR.NghiaTransparentWhite30 : undefined }]}>
              <CTEXT.NGT_Inter_BodyLg_Med>{index + 1}</CTEXT.NGT_Inter_BodyLg_Med>
              <View pointerEvents="none">{roundNum === 12 ? null : ICON.greenClock(vw(8), vw(8))}</View>
              <CLASS.ViewRowCenter style={[styles.border1white, styles.w100, styles.paddingH1vw, styles.borderRadius2vw, { backgroundColor: index === 1 ? 'white' : index === roundTime.length - 1 ? NGHIACOLOR.NghiaBrand600 : undefined, borderWidth: index === roundTime.length - 1 ? 0 : 1 }]}>
                <CTEXT.NGT_Inter_BodyLg_Med color={index === 1 ? NGHIACOLOR.NghiaBrand600 : 'white'}>{item}s</CTEXT.NGT_Inter_BodyLg_Med>
              </CLASS.ViewRowCenter>
            </CLASS.ViewColCenter>
          ))}
        </CLASS.ViewRowBetweenCenter>
      </View>
    );
  });

  const renderTimeBox = useMemo(() => {
    const headerText = [
      `Scramble: ${multiMode ? `` : ``} lượt ${round}`,
      `Quan sát`,
      `Sẵn sàng`,
      `Đang đếm thời gian`,
      `Kết quả lượt ${round}`,
    ];
    const bottomText = [
      ``,
      `Chạm tay của bạn vào Vùng này khi sẵn sàng`,
      `Bỏ chạm để bắt đầu đếm giờ`,
      `Chạm lại vào Vùng này để kết thúc bộ đếm`,
      `Chạm tay của bạn vào Vùng này khi sẵn sàng với lượt chơi thứ ${round + 1}`,
    ];

    return (
      <TimerBox
        round={round}
        formular={step === 0 ? FOM : ''}
        header={headerText[step]}
        bottom={step === 0 ? '' : bottomText[step]}
        time={displayTime}

      />
    );
  }, [round, step, multiMode, displayTime, FOM]);

  const stepFncControl = useCallback(() => {
    switch (step) {
      case 0:
        setInspectTime(lvlData[CurrentCache.currentGameLvl][3] as number);
        setRound(prevRound => prevRound + 1);
        handleTimerExtraPadding(vw(20));
        setDisplayTime(inspectTime);
        memoizedCounter(inspectTime);
        opacityAnimatorBlinker();
        break;
      case 1:
        stopOpacityAnimatorBlinker();
        handleOpacityAnimation(0);
        endCounter();
        // break;
      case 2:
        handleStartStop();
        setInspectTime(0);
        opacityAnimatorBlinker();
        break;
      case 3:
        handleStartStop();
        setInspectTime(0);
        stopOpacityAnimatorBlinker();
        handleTimerExtraPadding(0);
        setTotalTime(displayTime);
        break;
      case 4:
        setStep(0);
        break;
      default:
        break;
    }
    setStep(prevStep => prevStep + 1);
  }, [step, inspectTime, displayTime, handleStartStop, memoizedCounter, stopOpacityAnimatorBlinker, handleOpacityAnimation]);

  const renderItem = useMemo(() => {
    const commonProps = {
      icon: lvlData[CurrentCache.currentGameLvl][0],
      title: lvlData[CurrentCache.currentGameLvl][1] as string,
      med: lvlData[CurrentCache.currentGameLvl][2] as string,
      time: totalTime,
    };

    return (
      <CLASS.ViewCol style={[styles.h100, styles.paddingH6vw, styles.gap4vw]}>
        <CLASS.LevelBeing {...commonProps} />
        {renderTimeBox}
        <RoundResult round={round} time={totalTime} />
        {multiMode === 1 && <RoundResult round={roundUser2} time={totalTimeUser2} />}
      </CLASS.ViewCol>
    );
  }, [multiMode, round, totalTime, roundUser2, renderTimeBox]);

  return (
    <CLASS.SSBarWithSaveArea trans margin barContentStyle='light-content' bgColor={DefaultTheme.colors.background} barColor={DefaultTheme.colors.background}>
      <CLASS.ViewRowBetweenCenter style={[styles.paddingH4vw, styles.paddingV2vw]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.padding2vw]}>
          {ICON.sharpLeftArrow(vw(6), vw(6), 'white')}
        </TouchableOpacity>
        <CTEXT.NGT_Inter_DispMd_SemiBold>Game on</CTEXT.NGT_Inter_DispMd_SemiBold>
        <TouchableOpacity style={[styles.padding2vw]}>
          {ICON.tripleline(vw(6), vw(6), 'white')}
        </TouchableOpacity>
      </CLASS.ViewRowBetweenCenter>

      <View style={[styles.flex1]}>
        <ScrollView style={[styles.flex1]}>
          {renderItem}
          {marginBottomForScrollView()}
        </ScrollView>
      </View>
    </CLASS.SSBarWithSaveArea>
  );
}