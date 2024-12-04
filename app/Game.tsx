import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native';
import Animated, { Easing, useSharedValue, withSpring } from 'react-native-reanimated';
import { componentStyle, NGHIACOLOR } from '@/assets/componentStyleSheet';
import styles, { vw } from '@/assets/stylesheet';
import { avatarComponet, convertNumberToTime, marginBottomForScrollView } from '@/assets/component';
import * as ICON from '@/assets/svgXml';
import * as CLASS from '@/assets/Class';
import * as CTEXT from '@/assets/CustomText';
import { CommonActions, DefaultTheme, useNavigation } from '@react-navigation/native';
import { MatchHistoryFormat } from '@/data/interfaceFormat';
import { getStorageList, saveStorageItem } from '@/data/storageFunc';
import { RootContext } from '@/data/store';
import { lvlData } from '@/data/factoryData';

export default function Game() {
  const navigation = useNavigation();
  const [CurrentCache, dispatch] = React.useContext(RootContext);
  const [multiMode, setMultiMode] = React.useState<0 | 1 | 2>(CurrentCache.multiMode);

  const [currentPlayerIsUser2, setCurrentPlayerIsUser2] = React.useState(false)

  const [totalTime, setTotalTime] = React.useState<number>(0);
  const [totalTimeUser2, setTotalTimeUser2] = React.useState<number>(0);
  const [round, setRound] = React.useState<number>(0);
  const [roundUser2, setRoundUser2] = React.useState<number>(0);
  const [step, setStep] = React.useState<number>(0);
  const [match, setMatch] = React.useState<MatchHistoryFormat>();

  const [afterMatch, setAfterMatch] = React.useState(false)
  const [startPlaying, setStartPlaying] = React.useState<number>(0)

  const [roundNum, setRoundNum] = React.useState<12 | 5>(CurrentCache.currentGameLvl === 2 ? 12 : 5);

  const commonProps = {
    icon: lvlData[CurrentCache.currentGameLvl][0],
    title: lvlData[CurrentCache.currentGameLvl][1] as string,
    med: lvlData[CurrentCache.currentGameLvl][2] as string,
  };

  // TIMER VAR
  const [colorFullFormat, setColorFullFormat] = React.useState<0 | 1>(0);
  const [inspectTime, setInspectTime] = React.useState<number>(lvlData[CurrentCache.currentGameLvl][3] as number);
  const [displayTime, setDisplayTime] = React.useState<number>(0);
  const [timerboxHeaderStr, setTimerboxHeaderStr] = React.useState<string>(`Scramble: ${multiMode ? `Bạn - ` : ``} lượt ${round + 1}`);
  const [timerboxBottomStr, setTimerboxBottomStr] = React.useState<string>('');

  const [roundTimeUser1, setRoundTimeUser1] = React.useState<number[]>(Array(roundNum).fill(0));
  const [roundTimeUser2, setRoundTimeUser2] = React.useState<number[]>(Array(roundNum).fill(0));
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
      if (!startPlaying) setStartPlaying(performance.now())
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
  const [countDownEnded, setCountDownEnded] = useState(false)
  const memoizedCounter = useCallback((second: number) => {
    if (second > 0) {
      counterTimeoutId = window.setTimeout(() => {
        setDisplayTime(second - 1);
        memoizedCounter(second - 1); // Use memoized version
      }, 1000);
    } else {
      console.log('end count');
      setCountDownEnded(true)
      counterTimeoutId = null;
    }
  }, []);
  const endCounter = useCallback(() => {
    if (counterTimeoutId) {
      clearTimeout(counterTimeoutId);
      counterTimeoutId = null;
    }
    setColorFullFormat(1)
    setDisplayTime(0);
    setInspectTime(0);
  }, []);

  // OPACITY ANIMATOR >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const opacityAnimate = useSharedValue(0);
  const timerExtraPaddingAnimate = useSharedValue(0);

  const handleOpacityAnimation = useCallback((toValue: number) => {
    opacityAnimate.value = withSpring(toValue, {
      damping: 10,
      stiffness: 100,
    });
  }, []);

  const handleTimerExtraPadding = useCallback((toValue: number) => {
    timerExtraPaddingAnimate.value = withSpring(toValue, {
      damping: 10,
      stiffness: 100,
    });
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

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);
  // END OF OPACITY ANIMATOR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  const handleResult = () => {
    const sumRoundTime = (roundTime: number[], round: number) => {
      return roundTime.slice(1, round).reduce((acc, time) => acc + time, 0) / (round - 1);
    }
    if (multiMode) {
      if (currentPlayerIsUser2) {
        let newRoundTimeUser2 = [...roundTimeUser2];
        newRoundTimeUser2[roundUser2] = displayTime;
        console.log(newRoundTimeUser2);
        setRoundTimeUser2(newRoundTimeUser2);
        setTotalTimeUser2(sumRoundTime(roundTimeUser2, roundUser2) || 0);
        setRoundUser2(prev => prev + 1);
      } else {
        let newRoundTimeUser1 = [...roundTimeUser1];
        newRoundTimeUser1[round] = displayTime;
        console.log(newRoundTimeUser1, " - " + round);
        setRoundTimeUser1(newRoundTimeUser1);
        setTotalTime(sumRoundTime(roundTimeUser1, round) || 0);
        setRound(prev => prev + 1);
      }
      setCurrentPlayerIsUser2(!currentPlayerIsUser2);
    } else {
      let newRoundTimeUser1 = [...roundTimeUser1];
      newRoundTimeUser1[round] = displayTime;
      console.log(newRoundTimeUser1, " - " + round);
      setRoundTimeUser1(newRoundTimeUser1);
      setTotalTime(sumRoundTime(roundTimeUser1, round) || 0);
      setRound(prev => prev + 1);
    }
  }

  const stepFncControl = useCallback((forceStep?: number) => {

    const isLastRound = multiMode ? (roundUser2 + 1) === roundNum && currentPlayerIsUser2 : (round + 1) === roundNum;
    const nextRound = multiMode
      ? (currentPlayerIsUser2 ? (round + 1) : (roundUser2 + 1))
      : (round + 2);
    const playerLabel = multiMode
      ? (currentPlayerIsUser2 ? 'của Bạn' : 'của Khách')
      : '';

    const readyMessage = `Chạm tay của bạn vào Vùng này khi sẵn sàng với lượt chơi thứ ${nextRound} ${playerLabel}`;
    const resultMessage = `Chạm để xem kết quả`;

    const nextPlayerHeader = multiMode ? (currentPlayerIsUser2 ? 'Khách' : 'Bạn') : 'Bạn';
    const nextRoundHeader = multiMode ? (currentPlayerIsUser2 ? roundUser2 + 1 : round + 1) : round + 1;

    const currentRoundHeader = multiMode ? (currentPlayerIsUser2 ? roundUser2 + 1 : round + 1) : round + 1;
    const playerLabelHeader = multiMode ? (currentPlayerIsUser2 ? 'của Khách' : 'của Bạn') : '';


    let localStep = step
    console.log('stepfnccontrol ' + localStep);
    console.log(`totalTime `, totalTime, totalTimeUser2);

    if (forceStep) {
      localStep = forceStep;
    }
    switch (localStep) {
      case 0:
        setInspectTime(lvlData[CurrentCache.currentGameLvl][3] as number);
        handleTimerExtraPadding(vw(20));
        setColorFullFormat(0)
        setDisplayTime(inspectTime);
        memoizedCounter(inspectTime);
        setCountDownEnded(false)
        opacityAnimatorBlinker();
        // content
        setTimerboxHeaderStr(`Quan sát`)
        setTimerboxBottomStr(`Chạm tay của bạn vào Vùng này khi sẵn sàng`)
        break;
      case 1:
        stopOpacityAnimatorBlinker();
        handleOpacityAnimation(0);
        // content
        setTimerboxHeaderStr(`Sẵn sàng`)
        setTimerboxBottomStr(`Bỏ chạm để bắt đầu đếm giờ`)
        break;
      case 2:
        endCounter();
        handleStartStop();
        setInspectTime(0);
        opacityAnimatorBlinker();
        // content
        setTimerboxHeaderStr(`Đang đếm thời gian`)
        setTimerboxBottomStr(`Chạm lại vào Vùng này để kết thúc bộ đếm`)
        break;
      case 3:
        handleStartStop();
        setInspectTime(0);
        stopOpacityAnimatorBlinker();
        stopOpacityAnimatorBlinker();
        stopOpacityAnimatorBlinker();
        handleTimerExtraPadding(0);
        setCountDownEnded(false)
        handleResult()
        // content
        setTimerboxHeaderStr(`Kết quả lượt ${currentRoundHeader} ${playerLabelHeader}`);
        setTimerboxBottomStr(isLastRound ? resultMessage : readyMessage);
        break;
      case 4:
        if (multiMode ? ((roundUser2) == roundNum) : ((round) == roundNum)) {
          setAfterMatch(true)
          console.log('after match');
          break
        } else {
          setTimerboxHeaderStr(`Lượt tiếp theo: ${nextPlayerHeader} - lượt ${nextRoundHeader}`);
          setTimerboxBottomStr(``)
          handleReset()
          break;
        }
      default:
        setStep(0)
        break;
    }
    localStep > 4 ? setStep(0) : setStep(localStep + 1);
    console.log('after stepfnccontrol ' + localStep);

  }, [step, inspectTime, displayTime, handleStartStop, memoizedCounter, stopOpacityAnimatorBlinker, handleOpacityAnimation]);

  useEffect(() => {
    if (countDownEnded === true) {
      stopOpacityAnimatorBlinker();
      stepFncControl(2)
    }
  }, [countDownEnded])

  const HEADER = useMemo(() => {
    return (
      <CLASS.ViewRowBetweenCenter style={[styles.paddingH4vw, styles.paddingV2vw]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()} style={[styles.padding2vw]}>
          {ICON.sharpLeftArrow(vw(6), vw(6), 'white')}
        </TouchableOpacity>
        <CTEXT.NGT_Inter_DispMd_SemiBold>Game on</CTEXT.NGT_Inter_DispMd_SemiBold>
        <TouchableOpacity style={[styles.padding2vw]}>
          {ICON.tripleline(vw(6), vw(6), 'white')}
        </TouchableOpacity>
      </CLASS.ViewRowBetweenCenter>
    )
  }, [])

  const LEVELBEING = useMemo(() => {
    return <CLASS.LevelBeing icon={commonProps.icon} title={commonProps.title} time={totalTime} med={commonProps.med} time2={multiMode ? totalTimeUser2 : undefined} />
  }, [totalTime, totalTimeUser2])

  const TIMERBOX_HEADER = useMemo(() => {
    return <CTEXT.NGT_Inter_DispLg_SemiBold color={NGHIACOLOR.NghiaBrand300}>{timerboxHeaderStr}</CTEXT.NGT_Inter_DispLg_SemiBold>
  }, [timerboxHeaderStr])

  const TIMERBOX_FOMULAR = useMemo(() => {
    return (
      <View style={[styles.borderRadius2vw, styles.paddingH4vw, styles.paddingV2vw, styles.justifyContentCenter, { backgroundColor: NGHIACOLOR.NghiaTransparentWhite10 }]}>
        <CTEXT.NGT_Inter_BodyLg_Reg style={[styles.textCenter]}>{FOM}</CTEXT.NGT_Inter_BodyLg_Reg>
      </View>
    )
  }, [FOM])

  const TIMERBOX_BOTTOM = useMemo(() => {
    return <CTEXT.NGT_Inter_BodyLg_Reg color={NGHIACOLOR.NghiaBrand500} style={[styles.textCenter, styles.paddingH4vw]}>{timerboxBottomStr}</CTEXT.NGT_Inter_BodyLg_Reg>
  }, [timerboxBottomStr])

  const TIMERBOX_READYBTN = useMemo(() => {
    return (
      <TouchableOpacity onPress={() => stepFncControl()}>
        <CLASS.ViewGra800700 style={[styles.justifyContentCenter, styles.borderRadius2vw, styles.paddingV3vw, styles.paddingH8vw]}>
          <CTEXT.NGT_Inter_HeaderLg_Med>Sẵn sàng</CTEXT.NGT_Inter_HeaderLg_Med>
        </CLASS.ViewGra800700>
      </TouchableOpacity>
    )
  }, [])

  const BESTRESULT = useMemo(() => {
    return (
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
    )
  }, [])

  const BLUECLOCKICON = useMemo(() => { return ICON.greenClock(vw(8), vw(8)) }, [])

  class RoundResult extends React.Component<{ round: number }> {
    shouldComponentUpdate(nextProps: Readonly<{ round: number }>, nextState: Readonly<{}>, nextContext: any): boolean {
      return nextProps.round !== this.props.round;
    }
    render(): React.ReactNode {
      return (
        <>
          <CLASS.ViewRowBetweenCenter style={[styles.paddingV3vw]}>
            <CTEXT.NGT_Inter_BodyLg_Reg>Phương pháp <CTEXT.NGT_Inter_BodyLg_SemiBold color={NGHIACOLOR.NghiaBrand300}>{lvlData[CurrentCache.currentGameLvl][2].toString()}</CTEXT.NGT_Inter_BodyLg_SemiBold></CTEXT.NGT_Inter_BodyLg_Reg>
            <CTEXT.NGT_Inter_BodyMd_Med>{roundNum - this.props.round} lượt còn lại</CTEXT.NGT_Inter_BodyMd_Med>
          </CLASS.ViewRowBetweenCenter>
          {multiMode ? <CTEXT.NGT_Inter_BodyLg_Reg style={[styles.marginTop4vw, styles.marginBottom2vw]}>Kết quả của bạn: </CTEXT.NGT_Inter_BodyLg_Reg> : null}
          <CLASS.ViewRowBetweenCenter style={[styles.w100, styles.padding2vw, componentStyle.borderBrand800, styles.flexWrap]}>
            {roundTimeUser1.map((item, index) => (
              <CLASS.ViewColCenter key={index} style={[styles.padding2vw, styles.borderRadius10, styles.gap2vw, styles.w20, { backgroundColor: round === index && !currentPlayerIsUser2 ? NGHIACOLOR.NghiaTransparentWhite30 : undefined }]}>
                <CTEXT.NGT_Inter_BodyLg_Med>{index + 1}</CTEXT.NGT_Inter_BodyLg_Med>
                <View pointerEvents="none">{roundNum === 12 ? null : BLUECLOCKICON}</View>
                <CLASS.ViewRowCenter style={[styles.border1white, styles.w100, styles.paddingH1vw, styles.borderRadius2vw, { backgroundColor: index === 1 ? 'white' : index === roundTimeUser1.length - 1 ? NGHIACOLOR.NghiaBrand600 : undefined, borderWidth: index === roundTimeUser1.length - 1 ? 0 : 1 }]}>
                  <CTEXT.NGT_Inter_BodyLg_Med color={index === 1 ? NGHIACOLOR.NghiaBrand600 : 'white'}>{(Math.round(item) / 1000).toFixed(1)}s</CTEXT.NGT_Inter_BodyLg_Med>
                </CLASS.ViewRowCenter>
              </CLASS.ViewColCenter>
            ))}
          </CLASS.ViewRowBetweenCenter>
          {
            multiMode ?
              <>
                <CTEXT.NGT_Inter_BodyLg_Reg style={[styles.marginTop4vw, styles.marginBottom2vw]}>Kết quả của khách: </CTEXT.NGT_Inter_BodyLg_Reg>
                <CLASS.ViewRowBetweenCenter style={[styles.w100, styles.padding2vw, componentStyle.borderBrand800, styles.flexWrap]}>
                  {roundTimeUser2.map((item, index) => (
                    <CLASS.ViewColCenter key={index} style={[styles.padding2vw, styles.borderRadius10, styles.gap2vw, styles.w20, { backgroundColor: roundUser2 === index && currentPlayerIsUser2 ? NGHIACOLOR.NghiaTransparentWhite30 : undefined }]}>
                      <CTEXT.NGT_Inter_BodyLg_Med>{index + 1}</CTEXT.NGT_Inter_BodyLg_Med>
                      <View pointerEvents="none">{roundNum === 12 ? null : ICON.greenClock(vw(8), vw(8))}</View>
                      <CLASS.ViewRowCenter style={[styles.border1white, styles.w100, styles.paddingH1vw, styles.borderRadius2vw, { backgroundColor: index === 1 ? 'white' : index === roundTimeUser2.length - 1 ? NGHIACOLOR.NghiaBrand600 : undefined, borderWidth: index === roundTimeUser2.length - 1 ? 0 : 1 }]}>
                        <CTEXT.NGT_Inter_BodyLg_Med color={index === 1 ? NGHIACOLOR.NghiaBrand600 : 'white'}>{(Math.round(item) / 1000).toFixed(1)}s</CTEXT.NGT_Inter_BodyLg_Med>
                      </CLASS.ViewRowCenter>
                    </CLASS.ViewColCenter>
                  ))}
                </CLASS.ViewRowBetweenCenter>
              </>
              : null
          }
        </>
      )
    }
  }

  class TimerBoxBottomCompo extends React.Component<{ round: number }> {
    shouldComponentUpdate(nextProps: Readonly<{ round: number }>, nextState: Readonly<{}>, nextContext: any): boolean {
      return nextProps.round !== this.props.round;
    }
    render(): React.ReactNode {
      return step === 0 || step === 5 ? TIMERBOX_READYBTN : TIMERBOX_BOTTOM
    }
  }


  function AfterMatchSaveToStorage() {
    let data: MatchHistoryFormat = {
      date: new Date(),
      time: performance.now() - startPlaying,
      lvl: ['Beginner', 'Intermediate', 'Expert'][CurrentCache.currentGameLvl] as 'Beginner' | 'Intermediate' | 'Expert',
      rounds: multiMode ? [...roundTimeUser1, ...roundTimeUser2] : roundTimeUser1,
      result: totalTime
    }
    saveStorageItem('match', data, `a${Math.round(Math.random() * 20)}-${new Date().toUTCString()}`)
  }
  class AfterMatch extends React.Component<{}> {
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
      return afterMatch
    }

    render(): React.ReactNode {
      AfterMatchSaveToStorage()
      return (
        <CLASS.ViewCol style={[styles.gap2vw, styles.marginVertical4vw, styles.paddingH6vw]}>
          <CTEXT.NGT_Inter_DispLg_Bld>Kết quả cuối cùng: </CTEXT.NGT_Inter_DispLg_Bld>
          <CLASS.ViewRowCenter style={[styles.w100, styles.gap4vw, styles.marginVertical2vw]}>
            {
              multiMode ? <CTEXT.NGT_Inter_HeaderLg_SemiBold style={[styles.flex1]}>Bạn: </CTEXT.NGT_Inter_HeaderLg_SemiBold> : null
            }
            <View style={[styles.paddingV3vw, styles.paddingH6vw, styles.borderRadius100, styles.alignSelfCenter, { backgroundColor: NGHIACOLOR.NghiaTransparentWhite30 }]}>
              <CTEXT.NGT_Inter_DispLg_SemiBold color={NGHIACOLOR.NghiaBrand300}>{convertNumberToTime(totalTime || 0)}</CTEXT.NGT_Inter_DispLg_SemiBold>
            </View>
          </CLASS.ViewRowCenter>
          {
            multiMode ?
              <CLASS.ViewRowCenter style={[styles.w100, styles.gap4vw, styles.marginVertical2vw]}>
                <CTEXT.NGT_Inter_HeaderLg_SemiBold style={[styles.flex1]}>Khách: </CTEXT.NGT_Inter_HeaderLg_SemiBold>
                <View style={[styles.paddingV3vw, styles.paddingH6vw, styles.borderRadius100, styles.alignSelfCenter, { backgroundColor: NGHIACOLOR.NghiaTransparentWhite30 }]}>
                  <CTEXT.NGT_Inter_DispLg_SemiBold color={NGHIACOLOR.NghiaBrand300}>{convertNumberToTime(totalTimeUser2 || 0)}</CTEXT.NGT_Inter_DispLg_SemiBold>
                </View>
              </CLASS.ViewRowCenter>
              : null
          }

          <CLASS.ViewRowBetweenCenter style={[styles.w100, styles.gap6vw, styles.marginTop2vw]}>
            <CLASS.ViewGra700600 style={[styles.borderRadius100, styles.overflowHidden, styles.flex1]}>
              <CLASS.RoundBtn title='Trở về' onPress={() => navigation.goBack()} textClass={CTEXT.NGT_Inter_HeaderMd_Bld} textColor='white' customStyle={[styles.w100, styles.justifyContentCenter, styles.paddingH4vw,]} />
            </CLASS.ViewGra700600>

            <CLASS.ViewGra700600 style={[styles.borderRadius100, styles.overflowHidden, styles.flex1]}>
              <CLASS.RoundBtn title='Chơi lại' onPress={() => {
                setCurrentPlayerIsUser2(false);
                setTotalTime(0)
                setTotalTimeUser2(0)
                setRound(0)
                setRoundUser2(0)
                setStep(0)
                setAfterMatch(false)
                setDisplayTime(0)
                setInspectTime(lvlData[CurrentCache.currentGameLvl][3] as number)
                setTimerboxHeaderStr(`Scramble: ${multiMode ? `Bạn - ` : ``} lượt 1`)
                setTimerboxBottomStr('')
                setRoundTimeUser1(Array(roundNum).fill(0))
                setRoundTimeUser2(Array(roundNum).fill(0))
                setIsRunning(false)
                setLastTime(0)
                setStartPlaying(0)
              }} textClass={CTEXT.NGT_Inter_HeaderMd_Bld} textColor='white' customStyle={[styles.w100, styles.justifyContentCenter, styles.paddingH4vw,]} />
            </CLASS.ViewGra700600>
          </CLASS.ViewRowBetweenCenter>
        </CLASS.ViewCol>
      )
    }
  }

  return (
    <CLASS.SSBarWithSaveArea trans margin barContentStyle='light-content' bgColor={DefaultTheme.colors.background} barColor={DefaultTheme.colors.background}>
      {HEADER}

      <View style={[styles.flex1]}>
        <ScrollView style={[styles.flex1]}>
          <CLASS.ViewCol style={[styles.h100, styles.paddingH6vw, styles.gap4vw]}>
            {LEVELBEING}
            {
              afterMatch ? <AfterMatch /> :
                <Pressable
                  disabled={step === 0}
                  onPressIn={() => stepFncControl()}
                  onPressOut={() => {
                    if (step === 2) stepFncControl();
                  }}
                >
                  <CLASS.ViewColCenter style={[styles.marginTop4vw, styles.positionRelative, styles.overflowHidden, { backgroundColor: NGHIACOLOR.NghiaTransparentDark30, borderColor: step === 3 ? 'red' : NGHIACOLOR.NghiaBrand800, borderRadius: vw(3), borderWidth: step === 3 ? 3 : 1 }]}>
                    <Animated.View style={[styles.flex1, styles.w100, styles.h100, styles.positionAbsolute, { opacity: opacityAnimate }]} >
                      <CLASS.ViewGra800700 style={[styles.w100, styles.h100]} />
                    </Animated.View>
                    <CLASS.ViewColCenter style={[styles.paddingH4vw, styles.paddingV6vw, styles.gap6vw]}>
                      {TIMERBOX_HEADER}
                      {
                        step === 0 || step === 5 ? TIMERBOX_FOMULAR :
                          <View style={[styles.paddingV3vw, styles.paddingH6vw, styles.borderRadius100, { backgroundColor: NGHIACOLOR.NghiaTransparentWhite30 }]}>
                            <CTEXT.NGT_Inter_DispLg_SemiBold color={NGHIACOLOR.NghiaBrand300}>{colorFullFormat === 0 ? `${displayTime}"` : convertNumberToTime(displayTime || 0)}</CTEXT.NGT_Inter_DispLg_SemiBold>
                          </View>
                      }

                      <TimerBoxBottomCompo round={round} />
                    </CLASS.ViewColCenter>
                    <Animated.View style={{ height: timerExtraPaddingAnimate }} />
                  </CLASS.ViewColCenter>

                </Pressable>
            }
            <View style={[styles.padding4vw, componentStyle.borderBrand800]}>
              {BESTRESULT}
              <RoundResult round={round} />
            </View>
            {marginBottomForScrollView()}
          </CLASS.ViewCol>
        </ScrollView>
      </View>
    </CLASS.SSBarWithSaveArea>
  );
}