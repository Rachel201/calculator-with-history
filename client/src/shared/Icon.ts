import {IIconProps, registerIcons } from '@fluentui/react';
import react from 'react';

export  class Icons{ 
  static readonly add: IIconProps = { iconName: 'Add' };
  static readonly multiply: IIconProps = { iconName: 'CalculatorMultiplyIcon' };
  static readonly percentage: IIconProps = { iconName: 'CalculatorPercentageIcon' };
  static readonly subtract: IIconProps = { iconName: 'CalculatorSubtractIcon' };
  static readonly equal : IIconProps = { iconName: 'CalculatorEqualToIcon' };
  static readonly calculator : IIconProps = { iconName: 'CalculatorIcon' };
  static readonly delete : IIconProps = { iconName: 'ErrorBadgeIcon' };
  static readonly update : IIconProps = { iconName: 'NavigateBackMirroredIcon' };


}