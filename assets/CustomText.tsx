import { Component } from "react";
import { Text } from "react-native";
import { vw } from "./stylesheet";
import { DefaultTheme } from "@react-navigation/native";

export class NGT_Inter_DispLg_Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Regular', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(6), lineHeight: vw(8) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_DispLg_Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Medium', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(6), lineHeight: vw(8) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_DispLg_SemiBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-SemiBold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(6), lineHeight: vw(8) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_DispLg_Bld extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Bold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(6), lineHeight: vw(8) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_DispLg_ExtraBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-ExtraBold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(6), lineHeight: vw(8) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_DispMd_Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Regular', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(5), lineHeight: vw(7.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_DispMd_Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Medium', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(5), lineHeight: vw(7.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_DispMd_SemiBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-SemiBold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(5), lineHeight: vw(7.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_DispMd_Bld extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Bold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(5), lineHeight: vw(7.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_DispMd_ExtraBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-ExtraBold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(5), lineHeight: vw(7.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_HeaderLg_Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Regular', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(4.5), lineHeight: vw(7) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_HeaderLg_Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Medium', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(4.5), lineHeight: vw(7) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_HeaderLg_SemiBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-SemiBold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(4.5), lineHeight: vw(7) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_HeaderLg_Bld extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Bold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(4.5), lineHeight: vw(7) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_HeaderLg_ExtraBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-ExtraBold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(4.5), lineHeight: vw(7) }, style]}>
                {children}
            </Text>
        );
    }
}

export class NGT_Inter_HeaderMd_Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Regular', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(4), lineHeight: vw(6) }, style]}>
                {children}
            </Text>
        )
    }
}

export class NGT_Inter_HeaderMd_Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Medium', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(4), lineHeight: vw(6) }, style]}>
                {children}
            </Text>
        )
    }
}

export class NGT_Inter_HeaderMd_SemiBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-SemiBold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(4), lineHeight: vw(6) }, style]}>
                {children}
            </Text>
        )
    }
}

export class NGT_Inter_HeaderMd_Bld extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Bold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(4), lineHeight: vw(6) }, style]}>
                {children}
            </Text>
        )
    }
}

export class NGT_Inter_HeaderMd_ExtraBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-ExtraBold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(4), lineHeight: vw(6) }, style]}>
                {children}
            </Text>
        )
    }
}

export class NGT_Inter_BodyLg_Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Regular', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(3.5), lineHeight: vw(5.5) }, style]}>
                {children}
            </Text>
        )
    }
}

export class NGT_Inter_BodyLg_Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Medium', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(3.5), lineHeight: vw(5.5) }, style]}>
                {children}
            </Text>
        )
    }
}

export class NGT_Inter_BodyLg_SemiBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-SemiBold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(3.5), lineHeight: vw(5.5) }, style]}>
                {children}
            </Text>
        )
    }
}

export class NGT_Inter_BodyLg_Bld extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;
        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Bold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(3.5), lineHeight: vw(5.5) }, style]}>
                {children}
            </Text>
        )
    }
}

export class NGT_Inter_BodyLg_ExtraBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;
        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-ExtraBold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(3.5), lineHeight: vw(5.5) }, style]}>
                {children}
            </Text>
        )
    }
}

export class NGT_Inter_BodyMd_Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;
        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Regular', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(3), lineHeight: vw(4.5) }, style]}>
                {children}
            </Text>
        )
    }
}

export class NGT_Inter_BodyMd_Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;
        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Medium', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(3), lineHeight: vw(4.5) }, style]}>
                {children}
            </Text>
        )
    }
}

export class NGT_Inter_BodyMd_SemiBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;
        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-SemiBold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(3), lineHeight: vw(4.5) }, style]}>
                {children}
            </Text>
        )
    }
}

export class NGT_Inter_BodyMd_Bld extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;
        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-Bold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(3), lineHeight: vw(4.5) }, style]}>
                {children}
            </Text>
        )
    }
}

export class NGT_Inter_BodyMd_ExtraBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;
        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'Inter-ExtraBold', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(3), lineHeight: vw(4.5) }, style]}>
                {children}
            </Text>
        )
    }
}

export class RobotoMonoReg12 extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;
        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'RobotoMono-Regular', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(3), lineHeight: vw(4.5) }, style]}>
                {children}
            </Text>
        )
    }
}

export class RobotoMonoReg14 extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number, color?: any }> {
    render() {
        const { color, children, style, lineNumber } = this.props;
        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'RobotoMono-Regular', color: this.props.color ? this.props.color : DefaultTheme.colors.text, fontSize: vw(3.5), lineHeight: vw(4.5) }, style]}>
                {children}
            </Text>
        )
    }
}