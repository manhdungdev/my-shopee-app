import React, { ElementType, useId, useRef, useState } from 'react'
import {
  FloatingArrow,
  FloatingPortal,
  arrow,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole
} from '@floating-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  children: React.ReactNode | ((open: boolean) => React.ReactNode)
  renderPopover: React.ReactNode
  className: string
  as?: ElementType
  initialOpen?: boolean
}

export default function Popover({ children, renderPopover, initialOpen, className, as: Element = 'div' }: Props) {
  const arrowRef = useRef(null)
  const [isOpen, setIsOpen] = useState(initialOpen || false)

  //   const { refs, floatingStyles, context, middlewareData } = useFloating({
  //     middleware: [offset(12), shift(), arrow({ element: arrowRef })],
  //     transform: false
  //   })

  const data = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
    whileElementsMounted: autoUpdate,
    transform: false
  })
  const { refs, floatingStyles, context, middlewareData } = data
  const hover = useHover(context, { handleClose: safePolygon() })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role])
  const id = useId()

  //   const showPopover = () => setIsOpen(true)
  //   const hidePopover = () => setIsOpen(false)
  return (
    <Element
      className={isOpen ? `${className} text-[#ffffffb3]` : className}
      ref={refs.setReference}
      {...getReferenceProps()}
      //   onMouseEnter={showPopover}
      //   onMouseLeave={hidePopover}
    >
      {typeof children === 'function' ? children(isOpen) : children}
      <FloatingPortal id={id}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              {...getFloatingProps()}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ ease: 'linear', duration: 0.2 }}
            >
              <FloatingArrow ref={arrowRef} context={context} fill='white' width={20} height={10} />
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  )
}
