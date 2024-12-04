import { Dimensions, StyleSheet } from 'react-native';

export const vw = number => Dimensions.get('window').width * (number / 100);
export const vh = number => Dimensions.get('window').height * (number / 100);
export const vmin = number => Math.min(Dimensions.get('window').width * (number / 100), Dimensions.get('window').height * (number / 100));
export const vmax = number => Math.max(Dimensions.get('window').width * (number / 100), Dimensions.get('window').height * (number / 100));

const styles = StyleSheet.create({
    wfit: {
        alignSelf: 'flex-start'
    },

    wAuto: {
        width: 'auto',
    },

    w100: {
        width: '100%',
    },

    w100vw: {
        width: vw(100),
    },

    w90: {
        width: '90%',
    },

    w90vw: {
        width: vw(90),
    },

    w84vw: {
        width: vw(84),
    },

    w80: {
        width: '80%',
    },

    w80vw: {
        width: vw(80),
    },

    w70: {
        width: '70%',
    },

    w70vw: {
        width: vw(70),
    },

    w60: {
        width: '60%',
    },

    w60vw: {
        width: vw(60),
    },

    w50: {
        width: '50%',
    },

    w50vw: {
        width: vw(50),
    },

    w48: {
        width: '48%',
    },

    w45: {
        width: '45%',
    },

    w45vw: {
        width: vw(45),
    },

    w40: {
        width: '40%',
    },

    w40vw: {
        width: vw(40),
    },

    w30: {
        width: '30%',
    },

    w30vw: {
        width: vw(30),
    },

    w25: {
        width: '25%',
    },

    w20: {
        width: '20%',
    },

    w20vw: {
        width: vw(20),
    },

    w15vw: {
        width: vw(15),
    },

    w10: {
        width: '10%',
    },

    w10vw: {
        width: vw(10),
    },

    w5: {
        width: '5%',
    },

    w5vw: {
        width: vw(5),
    },

    w2: {
        width: '2%',
    },

    w2vw: {
        width: vw(2),
    },

    w1: {
        width: '1%',
    },

    w1vw: {
        width: vw(1),
    },

    w0: {
        width: '0%',
    },

    w0vw: {
        width: vw(0),
    },

    wm30vw: {
        minWidth: vw(30),
    },

    // height = width
    hAuto: {
        height: 'auto',
    },

    h100: {
        height: '100%',
    },

    h100vh: {
        height: vh(100),
    },

    h100vw: {
        height: vw(100),
    },

    h90: {
        height: '90%',
    },

    h90vw: {
        height: vw(90),
    },

    h90vh: {
        height: vh(90),
    },

    h80: {
        height: '80%',
    },

    h80vh: {
        height: vh(80),
    },

    h80vw: {
        height: vw(80),
    },

    h60: {
        height: '60%',
    },

    h60vh: {
        height: vh(60),
    },

    h60vw: {
        height: vw(60),
    },

    h50: {
        height: '50%',
    },

    h50vh: {
        height: vh(50),
    },

    h50vw: {
        height: vw(50),
    },

    h45: {
        height: '45%',
    },

    h40: {
        height: '40%',
    },

    h40vh: {
        height: vh(40),
    },

    h40vw: {
        height: vw(40),
    },

    h30: {
        height: '30%',
    },

    h30vh: {
        height: vh(30),
    },

    h30vw: {
        height: vw(30),
    },

    h25: {
        height: '25%',
    },

    h25vh: {
        height: vh(25),
    },

    h20: {
        height: '20%',
    },

    h20vh: {
        height: vh(20),
    },

    h20vw: {
        height: vw(20),
    },

    h15vw: {
        height: vw(15),
    },

    h15vh: {
        height: vh(15),
    },

    h10: {
        height: '10%',
    },

    h10vh: {
        height: vh(10),
    },

    h10vw: {
        height: vw(10),
    },

    h5: {
        height: '5%',
    },

    h5vh: {
        height: vh(5),
    },

    h2: {
        height: '2%',
    },

    h2vh: {
        height: vh(2),
    },

    marginTop10vw: {
        marginTop: vw(10),
    },

    marginTop8vw: {
        marginTop: vw(8),
    },

    marginTop6vw: {
        marginTop: vw(6),
    },

    marginTop5vw: {
        marginTop: vw(5),
    },

    marginTop4vw: {
        marginTop: vw(4),
    },

    marginTop2vw: {
        marginTop: vw(2),
    },

    marginTop1vw: {
        marginTop: vw(1),
    },

    marginTop0vw: {
        marginTop: vw(0),
    },

    marginTop10vh: {
        marginTop: vh(10),
    },

    marginTop8vh: {
        marginTop: vh(8),
    },

    marginTop6vh: {
        marginTop: vh(6),
    },

    marginTop5vh: {
        marginTop: vh(5),
    },

    marginTop2vh: {
        marginTop: vh(2),
    },

    marginTop1vh: {
        marginTop: vh(1),
    },

    marginBottom10vw: {
        marginBottom: vw(10),
    },

    marginBottom8vw: {
        marginBottom: vw(8),
    },

    marginBottom6vw: {
        marginBottom: vw(6),
    },

    marginBottom5vw: {
        marginBottom: vw(5),
    },

    marginBottom4vw: {
        marginBottom: vw(4),
    },

    marginBottom2vw: {
        marginBottom: vw(2),
    },

    marginBottom1vw: {
        marginBottom: vw(1),
    },

    marginRight10vw: {
        marginRight: vw(10),
    },

    marginRight8vw: {
        marginRight: vw(8),
    },

    marginRight6vw: {
        marginRight: vw(6),
    },

    marginRight5vw: {
        marginRight: vw(5),
    },

    marginRight4vw: {
        marginRight: vw(4),
    },

    marginRight2vw: {
        marginRight: vw(2),
    },

    marginRight1vw: {
        marginRight: vw(1),
    },

    marginLeft10vw: {
        marginLeft: vw(10),
    },

    marginLeft8vw: {
        marginLeft: vw(8),
    },

    marginLeft6vw: {
        marginLeft: vw(6),
    },

    marginLeft5vw: {
        marginLeft: vw(5),
    },

    marginLeft4vw: {
        marginLeft: vw(4),
    },

    marginLeft2vw: {
        marginLeft: vw(2),
    },

    marginLeft1vw: {
        marginLeft: vw(1),
    },

    marginHorizontal10vw: {
        marginHorizontal: vw(10),
    },

    marginHorizontal8vw: {
        marginHorizontal: vw(8),
    },

    marginHorizontal6vw: {
        marginHorizontal: vw(6),
    },

    marginHorizontal5vw: {
        marginHorizontal: vw(5),
    },

    marginHorizontal4vw: {
        marginHorizontal: vw(4),
    },

    marginHorizontal2vw: {
        marginHorizontal: vw(2),
    },

    marginHorizontal1vw: {
        marginHorizontal: vw(1),
    },

    marginVertical10vw: {
        marginVertical: vw(10),
    },

    marginVertical8vw: {
        marginVertical: vw(8),
    },

    marginVertical6vw: {
        marginVertical: vw(6),
    },

    marginVertical5vw: {
        marginVertical: vw(5),
    },

    marginVertical4vw: {
        marginVertical: vw(4),
    },

    marginVertical3vw: {
        marginVertical: vw(3),
    },

    marginVertical2vw: {
        marginVertical: vw(2),
    },

    marginVertical1vw: {
        marginVertical: vw(1),
    },

    margin1vw: {
        margin: vw(1),
    },

    margin2vw: {
        margin: vw(2),
    },

    margin3vw: {
        margin: vw(3),
    },

    margin4vw: {
        margin: vw(4),
    },

    margin5vw: {
        margin: vw(5),
    },

    margin6vw: {
        margin: vw(6),
    },

    margin8vw: {
        margin: vw(8),
    },

    margin10vw: {
        margin: vw(10),
    },

    padding8vw: {
        padding: vw(8),
    },

    padding6vw: {
        padding: vw(6),
    },

    padding5vw: {
        padding: vw(5),
    },

    padding4vw: {
        padding: vw(4),
    },

    padding3vw: {
        padding: vw(3),
    },

    padding2vw: {
        padding: vw(2),
    },

    padding1vw: {
        padding: vw(1),
    },

    padding10: {
        padding: vw(2.5),
    },

    paddingLeft4vw: {
        paddingLeft: vw(4),
    },

    paddingLeft2vw: {
        paddingLeft: vw(2),
    },

    paddingLeft1vw: {
        paddingLeft: vw(1),
    },

    paddingRight4vw: {
        paddingRight: vw(4),
    },

    paddingRight2vw: {
        paddingRight: vw(2),
    },

    paddingRight1vw: {
        paddingRight: vw(1),
    },

    paddingTop10vw: {
        paddingTop: vw(10),
    },

    paddingTop8vw: {
        paddingTop: vw(8),
    },

    paddingTop6vw: {
        paddingTop: vw(6),
    },

    paddingTop4vw: {
        paddingTop: vw(4),
    },

    paddingTop2vw: {
        paddingTop: vw(2),
    },

    paddingTop1vw: {
        paddingTop: vw(1),
    },

    paddingBottom8vw: {
        paddingBottom: vw(8),
    },

    paddingBottom5vw: {
        paddingBottom: vw(5),
    },

    paddingBottom4vw: {
        paddingBottom: vw(4),
    },

    paddingBottom2vw: {
        paddingBottom: vw(2),
    },

    paddingBottom1vw: {
        paddingBottom: vw(1),
    },

    paddingH10vw: {
        paddingHorizontal: vw(10),
    },

    paddingH8vw: {
        paddingHorizontal: vw(8),
    },

    paddingH6vw: {
        paddingHorizontal: vw(6),
    },

    paddingH5vw: {
        paddingHorizontal: vw(5),
    },

    paddingH4vw: {
        paddingHorizontal: vw(4),
    },

    paddingH3vw: {
        paddingHorizontal: vw(3),
    },

    paddingH2vw: {
        paddingHorizontal: vw(2),
    },

    paddingH1vw: {
        paddingHorizontal: vw(1),
    },

    paddingH10: {
        paddingHorizontal: vw(2.5),
    },

    paddingV10vw: {
        paddingVertical: vw(10),
    },

    paddingV8vw: {
        paddingVertical: vw(8),
    },

    paddingV6vw: {
        paddingVertical: vw(6),
    },

    paddingV4vw: {
        paddingVertical: vw(4),
    },

    paddingV3vw: {
        paddingVertical: vw(3),
    },

    paddingV2vw: {
        paddingVertical: vw(2),
    },

    paddingV1vw: {
        paddingVertical: vw(1),
    },

    paddingV1vh: {
        paddingVertical: vh(1),
    },

    paddingV2vh: {
        paddingVertical: vh(2),
    },

    paddingV10vh: {
        paddingVertical: vh(10),
    },

    paddingV10H20: {
        paddingVertical: vw(2.5),
        paddingHorizontal: vw(5),
    },

    borderRadius10: {
        borderRadius: vw(2.5),
    },

    borderRadius1vw: {
        borderRadius: vw(1),
    },

    borderRadius2vw: {
        borderRadius: vw(2),
    },

    borderRadius3vw: {
        borderRadius: vw(3),
    },

    borderRadius4vw: {
        borderRadius: vw(4),
    },

    borderRadius100: {
        borderRadius: vw(100),
    },

    borderRadius20: {
        borderRadius: vw(5),
    },

    borderRadius16: {
        borderRadius: vw(4),
    },

    borderRadius40: {
        borderRadius: vw(10),
    },

    borderRadiusBottom24: {
        borderBottomLeftRadius: vw(6),
        borderBottomRightRadius: vw(6),
    },

    dFlex: {
        display: 'flex',
    },

    dGrid3ColAuto: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
    },

    dNone: {
        display: 'none',
    },

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },

    flexCol: {
        display: 'flex',
        flexDirection: 'column',
    },

    flexWrap: {
        flexWrap: 'wrap',
    },

    flexNoWrap: {
        flexWrap: 'nowrap',
    },

    flex1: {
        flex: 1,
    },

    flex2: {
        flex: 2,
    },

    flex3: {
        flex: 3,
    },

    flex4: {
        flex: 4,
    },

    flex5: {
        flex: 5,
    },

    flex6: {
        flex: 6,
    },

    flex7: {
        flex: 7,
    },

    flex8: {
        flex: 8,
    },

    flex9: {
        flex: 9,
    },

    flex10: {
        flex: 10,
    },

    gap10vw: {
        gap: vw(10),
    },

    gap8vw: {
        gap: vw(8),
    },

    gap6vw: {
        gap: vw(6),
    },

    gap5vw: {
        gap: vw(5),
    },

    gap4vw: {
        gap: vw(4),
    },

    gap3vw: {
        gap: vw(3),
    },

    gap2vw: {
        gap: vw(2),
    },

    gap1vw: {
        gap: vw(1),
    },

    gap5vh: {
        gap: vh(5),
    },

    gap2vh: {
        gap: vh(2),
    },

    gap1vh: {
        gap: vh(1),
    },

    gap10: {
        gap: vw(2.5),
    },

    rowGap6vw: {
        rowGap: vw(6),
    },

    rowGap4vw: {
        rowGap: vw(4),
    },

    rowGap2vw: {
        rowGap: vw(2),
    },

    rowGap1vw: {
        rowGap: vw(1),
    },

    colGap4vw: {
        columnGap: vw(4),
    },

    colGap2vw: {
        columnGap: vw(2),
    },

    colGap1vw: {
        columnGap: vw(1),
    },

    justifyContentCenter: {
        justifyContent: 'center',
    },

    justifyContentStart: {
        justifyContent: 'flex-start',
    },

    justifyContentEnd: {
        justifyContent: 'flex-end',
    },

    justifyContentSpaceBetween: {
        justifyContent: 'space-between',
    },

    justifyContentSpaceAround: {
        justifyContent: 'space-around',
    },

    justifyContentSpaceEvenly: {
        justifyContent: 'space-evenly',
    },

    alignContentCenter: {
        alignContent: 'center',
    },

    alignContentStart: {
        alignContent: 'flex-start',
    },

    alignContentEnd: {
        alignContent: 'flex-end',
    },

    alignContentSpaceBetween: {
        alignContent: 'space-between',
    },

    alignContentSpaceAround: {
        alignContent: 'space-around',
    },

    alignContentSpaceEvenly: {
        alignContent: 'space-evenly',
    },

    alignContentStretch: {
        alignContent: 'stretch',
    },

    alignContentBaseline: {
        alignContent: 'baseline',
    },

    alignItemsCenter: {
        alignItems: 'center',
    },

    alignItemsStart: {
        alignItems: 'flex-start',
    },

    alignItemsEnd: {
        alignItems: 'flex-end',
    },

    alignItemsStretch: {
        alignItems: 'stretch',
    },

    alignItemsBaseline: {
        alignItems: 'baseline',
    },

    alignSelfCenter: {
        alignSelf: 'center',
    },

    alignSelfStart: {
        alignSelf: 'flex-start',
    },

    alignSelfEnd: {
        alignSelf: 'flex-end',
    },

    alignSelfStretch: {
        alignSelf: 'stretch',
    },

    alignSelfBaseline: {
        alignSelf: 'baseline',
    },

    alignContentCenter: {
        alignContent: 'center',
    },

    alignContentStart: {
        alignContent: 'flex-start',
    },

    alignContentEnd: {
        alignContent: 'flex-end',
    },

    flexRowCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    flexRowBetweenCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    flexRowEvenlyCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    flexRowStartCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    flexRowStartBaseline: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
    },

    flexColCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    flexColBetweenCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    flexColEvenlyCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    flexColStartCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    flexColEndCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    flexColEndStart: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },

    alignContentSpaceBetween: {
        alignContent: 'space-between',
    },

    alignContentSpaceAround: {
        alignContent: 'space-around',
    },

    alignContentSpaceEvenly: {
        alignContent: 'space-evenly',
    },

    alignContentStretch: {
        alignContent: 'stretch',
    },

    positionRelative: {
        position: 'relative',
    },

    positionAbsolute: {
        position: 'absolute',
    },

    positionFixed: {
        position: 'fixed',
    },

    positionStatic: {
        position: 'static',
    },

    positionSticky: {
        position: 'sticky',
    },

    top4vw: {
        top: vw(4),
    },

    top1vw: {
        top: vw(1),
    },

    top0: {
        top: 0,
    },

    bottom0: {
        bottom: 0,
    },

    right5: {
        right: '5%',
    },

    right4vw: {
        right: vw(4),
    },

    centerX: {
        left: '50%',
        transform: [{ translateX: '-50%' }, { translateY: '0%' }],
    },
    centerY: {
        top: '50%',
        transform: [{ translateX: '0%' }, { translateY: '-50%' }],
    },
    centerXY: {
        top: '50%',
        left: '50%',
        transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    },

    centerByFlex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    right1vw: {
        right: vw(1),
    },

    textCenter: {
        textAlign: 'center',
    },

    textLeft: {
        textAlign: 'left',
    },

    textRight: {
        textAlign: 'right',
    },

    textJustify: {
        textAlign: 'justify',
    },

    textUpperCase: {
        textTransform: 'uppercase',
    },

    textLowerCase: {
        textTransform: 'lowercase',
    },

    fontSize1vw: {
        fontSize: vw(1),
    },

    fontSize2vw: {
        fontSize: vw(2),
    },

    fontSize3vw: {
        fontSize: vw(3),
    },

    fontSize4vw: {
        fontSize: vw(4),
    },

    fontSize5vw: {
        fontSize: vw(5),
    },

    fontSize6vw: {
        fontSize: vw(6),
    },

    fontSize7vw: {
        fontSize: vw(7),
    },

    textUnderline: {
        textDecorationLine: 'underline',
    },

    textLineThrough: {
        textDecorationLine: 'line-through',
    },

    textNoUnderline: {
        textDecorationLine: 'none',
    },

    textLineSolid: {
        textDecorationStyle: 'solid',
    },

    textLineDotted: {
        textDecorationStyle: 'dotted',
    },

    textLineDashed: {
        textDecorationStyle: 'dashed',
    },

    textAlignVerticalTop: {
        textAlignVertical: 'top',
    },

    textAlignVerticalCenter: {
        textAlignVertical: 'center',
    },

    textAlignVerticalBottom: {
        textAlignVertical: 'bottom',
    },

    textAlignVerticalAuto: {
        textAlignVertical: 'auto',
    },

    lineHeight20: {
        lineHeight: vw(5),
    },

    overflowHidden: {
        overflow: 'hidden',
    },

    overflowHiddenEllipsis: {
        overflow: 'hidden',
    },

    overflowVisible: {
        overflow: 'visible',
    },

    overflowScroll: {
        overflow: 'scroll',
    },

    overflowXHidden: {
        overflowX: 'hidden',
    },

    overflowXVisible: {
        overflowX: 'visible',
    },

    overflowXScroll: {
        overflowX: 'scroll',
    },

    overflowYHidden: {
        overflowY: 'hidden',
    },

    overflowYVisible: {
        overflowY: 'visible',
    },

    overflowYScroll: {
        overflowY: 'scroll',
    },

    border1black: {
        borderWidth: 1,
        borderColor: 'black',
    },

    border1red: {
        borderWidth: 1,
        borderColor: 'red',
    },

    border1green: {
        borderWidth: 1,
        borderColor: 'green',
    },

    border1blue: {
        borderWidth: 1,
        borderColor: 'blue',
    },

    border1yellow: {
        borderWidth: 1,
        borderColor: 'yellow',
    },

    border1white: {
        borderWidth: 1,
        borderColor: 'white',
    },

    border1: {
        borderWidth: 1,
    },

    border2: {
        borderWidth: 2,
    },

    zIndex1: {
        zIndex: 1,
    },

    zIndexM1: {
        zIndex: -1,
    },

    objectFitCover: {
        objectFit: 'cover',
    },

    objectFitContain: {
        objectFit: 'contain',
    },

    image100Cover: {
        objectFit: 'cover',
        height: '100%',
        width: '100%',
    },

    image100Contain: {
        objectFit: 'contain',
        height: '100%',
        width: '100%',
    },

    image100CoverCenter: {
        objectFit: 'cover',
        height: '100%',
        width: '100%',
        resizeMode: 'center',
    },

    shadowW0H1Black: {
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vw(1) },
        shadowOpacity: 0.25,
        shadowRadius: vw(1),
        elevation: vw(1),
    },

    shadowW0H05Black: {
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vw(0.5) },
        shadowOpacity: 0.125,
        shadowRadius: vw(0.5),
        elevation: vw(1),
    },

    shadowW0H1Color: {
        shadowOffset: { width: vw(0), height: vw(1) },
        shadowOpacity: 0.25,
        shadowRadius: vw(1),
        elevation: vw(2),
    },

    shadowW0H2Black: {
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vw(1.5) },
        shadowOpacity: 0.075,
        shadowRadius: vw(1.75),
        elevation: vw(3),
    },

    shadowW0H0Black: {
        shadowColor: 'black',
        shadowOffset: { width: vw(0), height: vw(0) },
        shadowOpacity: 0.2,
        shadowRadius: vw(1),
        elevation: vw(1),
    },

    shadowW1H1p5Black: {
        shadowColor: 'black',
        shadowOffset: { width: vw(1), height: vw(1.5) },
        shadowOpacity: 0.2,
        shadowRadius: vw(2),
        elevation: vw(2),
    },

    bgcolorBlack: {
        backgroundColor: 'black',
    },

    bgcolorWhite: {
        backgroundColor: 'white',
    },

    bgcolorBlack80: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },

    bgcolorBlack60: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },

    bgcolorBlack50: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    bgcolorBlack40: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },

    bgcolorBlack30: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },

    bgcolorBlack20: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },

    bgcolorBlack10: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
});

export default styles;