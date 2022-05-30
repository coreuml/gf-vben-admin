import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import '/@/design/index.less';
import 'virtual:windi-utilities.css';
// Register icon sprite
import 'virtual:svg-icons-register';

import App from './App.vue';
import { createApp } from 'vue';
import { initAppConfigStore } from '/@/logics/initAppConfig';
import { setupErrorHandle } from '/@/logics/error-handle';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
import { setupStore } from '/@/store';
import { setupGlobDirectives } from '/@/directives';
import { setupI18n } from '/@/locales/setupI18n';
import { registerGlobComp } from '/@/components/registerGlobComp';

import { initVbenComponent, setMessage, setNotice } from '/@/vbenComponents';

// 按需导入组件
import {
  NTag,
  NCard,
  NDivider,
  NSpace,
  NPopover,
  NButton,
  NAvatar,
  NStatistic,
  NSelect,
  NInput,
  NThing,
  NPopconfirm,
  NIcon,
  NCheckbox,
  NCheckboxGroup,
  NButtonGroup,
  NModal,
  NEmpty,
  NUpload,
  NUploadDragger,
  NTabs,
  NTabPane,
  NGrid,
  NGridItem,
  NEllipsis,
  NImage,
  NMessageProvider,
  useMessage,
  NPagination,
  NRadio,
  NRadioButton,
  NRadioGroup,
  NText,
  NConfigProvider,
  NDynamicTags,
  NColorPicker,
  NDescriptions,
  NDescriptionsItem,
  useNotification,
  NNotificationProvider,
} from 'naive-ui';

async function bootstrap() {
  const app = createApp(App);
  await setupI18n(app);
  //VBenComponents 缩写为 VC
  // 注册组件至VC，入参：app
  initVbenComponent(app, {
    Tag: NTag,
    Card: NCard,
    Divider: NDivider,
    Space: NSpace,
    Popover: NPopover,
    Button: NButton,
    ButtonGroup: NButtonGroup,
    Avatar: NAvatar,
    Statistic: NStatistic,
    Select: NSelect,
    Input: NInput,
    Thing: NThing,
    Popconfirm: NPopconfirm,
    Icon: NIcon,
    Checkbox: NCheckbox,
    CheckboxGroup: NCheckboxGroup,
    Modal: NModal,
    Empty: NEmpty,
    Upload: NUpload,
    UploadDragger: NUploadDragger,
    Tabs: NTabs,
    TabPane: NTabPane,
    Grid: NGrid,
    GridItem: NGridItem,
    Ellipsis: NEllipsis,
    Image: NImage,
    MessageProvider: NMessageProvider,
    Pagination: NPagination,
    Radio: NRadio,
    RadioButton: NRadioButton,
    RadioGroup: NRadioGroup,
    Text: NText,
    Config: NConfigProvider,
    DynamicTags: NDynamicTags,
    ColorPicker: NColorPicker,
    Descriptions: NDescriptions,
    DescriptionsItem: NDescriptionsItem,
    NotificationProvider: NNotificationProvider,
  });
  // 注册useMessage函数
  setMessage(useMessage);
  setNotice(useNotification);
  // Configure store
  setupStore(app);

  // Initialize internal system configuration
  initAppConfigStore();

  // Register global components
  registerGlobComp(app);

  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side

  // Configure routing
  setupRouter(app);

  // router-guard
  setupRouterGuard(router);

  // Register global directive
  setupGlobDirectives(app);

  // Configure global error handling
  setupErrorHandle(app);

  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();

  app.mount('#app');
}

bootstrap();
