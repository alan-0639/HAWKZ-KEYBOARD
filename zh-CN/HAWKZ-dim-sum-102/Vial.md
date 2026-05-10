# Vial实时改键教程

::: raw
<div class="button-container">
  <a href="https://vial.rocks/" target="_blank" class="custom-button">Vial-网页版</a>
  <a href="https://get.vial.today/download//" target="_blank" class="custom-button">Vial-客戶端</a>
</div>


:::
<style>
.button-container {
  display: flex;
  gap: 20px!important; /* 控制按钮之间的间距 */
  margin: 20px 0;
}
.custom-button {
  display: inline-block;
  padding: 12px 15px;
  background-color: #a9cfecff; /* VitePress 主题色 */
  color: white !important; /* 确保文字为白色 */
  text-align: center;
  text-decoration: none;
  border-radius: 20px;
  flex: 1; /* 让按钮均分容器宽度 */
  transition: background-color 0.2s;
  /* 边框设置 */
  border: 5px solid #8bb8e0; /* 边框宽度、样式和颜色 */
  box-sizing: border-box; /* 确保边框包含在元素尺寸内 *
  /* 字体设置 */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif; /* 可以选择字体-隶书-Segoe UI等 */
  font-weight: 600; /* 字体粗细：400=正常，500=中等，600=半粗体，700=粗体 */
  font-size: 22px; /* 字体大小 */
}
.custom-button:hover {
  background-color: #c01111de; /* 悬停时稍微变亮 */
  color: white !important; /* 悬停时文字保持白色 */
}
</style>

- **Vial网页版**

可识别键盘的三种连接模式【 USB Cable mode / RF Dong mode/ Bluetooth mode 】，并自行对键盘进行对应的改键。

- **Vial客户端**

暂时只可识别键盘单种连接模式【 USB Cable mode 】，并自行对键盘进行对应的改键。

##
<div class="image-row image-row-1">
  <div class="image-item">
    <img src="/Vial网页版.png" alt="Vial網站版" class="zoom-medium">
    <div>Vial网站版-键盘蓝牙连接模式改键展示</div>
  </div>
</div>

## Vial功能模组难度分级指南

## 难度等级说明

| 难度等级 | 适合用户  | 功能复杂度 |
|---------|----------|------------|
| 初级玩法 | 新手用户 | 基础设置，直观易用 |
| 中级玩法 | 进阶用户 | 需要理解时序和组合概念 |
| 高级玩法 | 高级用户 | 涉及底层配置和复杂逻辑 |
| 测试工具 | 所有用户 | 硬体检测工具 |

## 功能模组详细说明

### 🔰 初级玩法

| 功能模组 | 主要功能 | 下级功能 | 使用场景 |
|---------|----------|----------|----------|
| **Keymap**<br>键位映射 | 直观修改按键功能，支援多层布局 | • **多层布局**：建立多个功能层<br>• **层切换键**：MO/TG/TT/DF/OSL/LT等切换方式<br>• **基础键值**：字母、数字、符号等标准键位 | • 个性化键位布局<br>• 建立专用功能层（游戏层、编程层）<br>• 适应不同使用场景 |
| **Macros**<br>巨集命令 | 录制或编辑按键序列，一键触发复杂操作 | • **巨集录制**：即时记录按键动作<br>• **手动编辑**：精确添加按键事件和延时<br>• **序列调整**：重新排序巨集动作 | • 快速输入常用文字<br>• 自动化重复操作<br>• 游戏连招快速键 |
| **Lighting**<br>灯光效果 | 图形化调节RGB背光效果 | • **效果选择**：切换灯光模式<br>• **亮度调节**：调整整体亮度<br>• **速度调节**：控制动态效果速度<br>• **色调调节**：自定义灯光颜色 | • 个性化键盘外观<br>• 建立氛围灯光<br>• 功能区域指示 |

### 🔸 中级玩法

| 功能模组 | 主要功能 | 下级功能 | 使用场景 |
|---------|----------|----------|----------|
| **Tap Dance**<br>点击舞 | 单按键多功能，根据点击次数/时长触发不同功能 | • **On Tap**：单击功能<br>• **On Hold**：按住功能<br>• **On Double Tap**：双击功能<br>• **On Tap + Hold**：单击后按住功能<br>• **Tapping Term**：敲击时限设定 | • 节省键盘空间<br>• 减少手指移动距离<br>• 为小配列键盘增加功能 |
| **Combos**<br>组合键 | 多键同时按下触发独立功能 | • **按键配置**：定义触发组合的按键<br>• **输出动作**：设定触发后的键值或巨集<br>• **时间窗口**：调整同时按下的判定时间 | • 建立快捷操作<br>• 模拟额外功能键<br>• 替代复杂组合键 |

### 🔷 高级玩法

| 功能模组 | 主要功能 | 下级功能 | 使用场景 |
|---------|----------|----------|----------|
| **Key Overrides**<br>按键覆写 | 重新定义修饰键组合的预设输出 | • **触发修饰键**：设定需要的修饰键<br>• **触发普通键**：设定配合的普通键<br>• **覆写输出**：定义新的输出键值<br>• **排除修饰键**：设定不能按下的修饰键<br>• **抑制修饰键**：屏蔽实际按下的修饰键 | • 修改系统级快速键<br>• 建立自定义组合键行为<br>• 修复特定软体快速键冲突 |
| **QMK Settings**<br>QMK设定 | 底层行为精细调整 | • **Tap-Hold**：点击/按住灵敏度<br>• **Auto Shift**：自动大小写切换<br>• **One Shot Keys**：单次生效修饰键<br>• **Mouse Keys**：键盘模拟滑鼠<br>• **Combo**：组合键全域参数<br>• **Magic**：快速交换修饰键<br>• **Grave Escape**：Esc键行为配置 | • 微调键盘响应特性<br>• 深度个性化输入体验<br>• 解决特定使用习惯问题 |

### 🛠️ 测试工具

| 功能模组 | 主要功能 | 下级功能 | 使用场景 |
|---------|----------|----------|----------|
| **Matrix Tester**<br>矩阵测试 | 即时检测键盘物理状态 | • **可视化矩阵**：网格图显示按键位置<br>• **状态回馈**：即时显示按键触发状态 | • 排查硬体故障<br>• 检测按键焊接品质<br>• 确认键盘连接状态 |

## 学习路径建议

### 🎯 新手入门路径
1. 从**Keymap**开始，熟悉基本键位修改
2. 尝试**Lighting**，个性化键盘外观
3. 学习**Macros**，提升操作效率

### 🚀 进阶提升路径
1. 掌握**Tap Dance**，优化按键利用率
2. 配置**Combos**，建立快捷操作组合
3. 使用**Matrix Tester**排查硬体问题

### ⚡ 高手精通路径
1. 深度使用**Key Overrides**，重新定义系统行为
2. 精细调整**QMK Settings**，完美适应个人习惯
3. 综合运用所有功能，打造终极输入体验

## 注意事项

- **相容性检查**：确保键盘韧体支援相应功能
- **备份配置**：修改前储存目前配置
- **逐步测试**：每次只修改少量设定并测试效果
- **查阅文件**：复杂功能参考官方文件说明

