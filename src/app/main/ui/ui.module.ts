import { NgModule } from '@angular/core';

import { UICardsModule } from '../ui/cards/cards.module';
import { UIFormsModule } from '../ui/forms/forms.module';
import { UIIconsModule } from '../ui/icons/icons.module';
import { UITypographyModule } from '../ui/typography/typography.module';
import { UIHelperClassesModule } from '../ui/helper-classes/helper-classes.module';
import { UIPageLayoutsModule } from '../ui/page-layouts/page-layouts.module';
import { UIColorsModule } from '../ui/colors/colors.module';

@NgModule({
    imports: [
        UICardsModule,
        UIFormsModule,
        UIIconsModule,
        UITypographyModule,
        UIHelperClassesModule,
        UIPageLayoutsModule,
        UIColorsModule
    ]
})
export class UIModule
{
}
