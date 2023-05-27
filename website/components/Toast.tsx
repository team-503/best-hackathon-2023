import { Action, Close, Description, Root, Title, Viewport } from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import { forwardRef } from 'react'

import { cn } from '@/utils/cn'

//

export { Provider as ToastProvider } from '@radix-ui/react-toast'

//

export const ToastViewport = forwardRef<
    React.ElementRef<typeof Viewport>,
    React.ComponentPropsWithoutRef<typeof Viewport>
>(({ className, ...props }, ref) => (
    <Viewport
        ref={ref}
        className={cn(
            'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
            className,
        )}
        {...props}
    />
))
ToastViewport.displayName = Viewport.displayName

//

export const toastVariants = cva(
    'data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full',
    {
        variants: {
            variant: {
                default: 'bg-background border',
                destructive:
                    'group destructive border-destructive bg-destructive text-destructive-foreground',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
)

export const Toast = forwardRef<
    React.ElementRef<typeof Root>,
    React.ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
    return <Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />
})
Toast.displayName = Root.displayName

//

export const ToastAction = forwardRef<
    React.ElementRef<typeof Action>,
    React.ComponentPropsWithoutRef<typeof Action>
>(({ className, ...props }, ref) => (
    <Action
        ref={ref}
        className={cn(
            'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
            className,
        )}
        {...props}
    />
))
ToastAction.displayName = Action.displayName

//

export const ToastClose = forwardRef<
    React.ElementRef<typeof Close>,
    React.ComponentPropsWithoutRef<typeof Close>
>(({ className, ...props }, ref) => (
    <Close
        ref={ref}
        className={cn(
            'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
            className,
        )}
        toast-close=""
        {...props}
    >
        <X className="h-4 w-4" />
    </Close>
))
ToastClose.displayName = Close.displayName

//

export const ToastTitle = forwardRef<
    React.ElementRef<typeof Title>,
    React.ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
    <Title ref={ref} className={cn('text-sm font-semibold', className)} {...props} />
))
ToastTitle.displayName = Title.displayName

//

export const ToastDescription = forwardRef<
    React.ElementRef<typeof Description>,
    React.ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
    <Description ref={ref} className={cn('text-sm opacity-90', className)} {...props} />
))
ToastDescription.displayName = Description.displayName

//

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

export type ToastActionElement = React.ReactElement<typeof ToastAction>
