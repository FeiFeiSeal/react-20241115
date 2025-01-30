/*
 * @Author:Pearlie
 * @Date:2025-01-29 01:27:18
 * @LastEditors:Pearlie
 * @LastEditTime:2025-01-30 02:15:23
 * @Description:
 */
export default function Tabs ({ buttons, buttonsContainer }) {
  const ButtonsContainer = buttonsContainer
  return (
      <ButtonsContainer>
        { buttons }
      </ButtonsContainer>
  )
}