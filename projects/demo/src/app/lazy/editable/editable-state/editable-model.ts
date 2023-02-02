import {LayoutDock, PanelConfig} from '@canvasgfx/layouts';

export interface EditableModels {
    [dock: string]: EditableModel;
}

export interface EditableModel extends PanelConfig {
    dock: LayoutDock;
}
